import { Game } from 'boardgame.io';
import { IGameState, INumberState } from './definitions';
import { GRID_SIZE, COL_DELTA, WILDCARD_NUM } from './constants';
import { shuffleArray } from './utils';

export const BingoGame: Game<IGameState> = {
  name: 'bingo',
  setup: (ctx) => {
    const players = {};
    for (let i = 0; i < ctx.numPlayers; i++) {
      // generate the grid numbers
      let gridNumbers = [];
      for (let s = 0; s < GRID_SIZE; s++) {
        gridNumbers = [
          ...gridNumbers,
          ...shuffleArray(new Array(COL_DELTA).fill(0).map((n, idx) => idx + 1 + s * COL_DELTA)).slice(0, GRID_SIZE),
        ];
      }
      // assign number to players
      players[i] = {
        numbers: gridNumbers.map((n, idx) => ({
          id: idx,
          value: n,
          marked: false,
          missed: false,
        })),
        shoutCount: 3,
        isWinner: false,
      };
    }

    return {
      players,
      callQueue: shuffleArray(new Array(COL_DELTA * GRID_SIZE).fill(0).map((n, idx) => idx + 1)),
      callRef: 0,
      timeRef: Date.now(),
    };
  },
  moves: {
    incrementCallRef: (G: IGameState) => {
      G.callRef = G.callRef + 1;
      G.timeRef = Date.now();
      return G;
    },
    playerClickedNumber: (G: IGameState, ctx, number: INumberState, playerID: string = '0') => {
      for (let n of G.players[playerID].numbers) {
        if (n.id === number.id) {
          n.marked = !n.marked;
        }
      }
      return G;
    },
    playerShouted: (G: IGameState, ctx, playerID: string = '0') => {
      const numbersShown = G.callQueue.slice(0, G.callRef);

      // check if any columns (5), rows (5) or diagonals (2) are complete
      let found, xPos, yPos, marked;
      found = new Array(12).fill(0);
      for (let n of G.players[playerID].numbers) {
        xPos = Math.floor(n.id / GRID_SIZE);
        yPos = n.id % GRID_SIZE;
        marked = (n.marked && numbersShown.includes(n.value)) || n.value === WILDCARD_NUM;
        // columns
        found[0] = found[0] + (xPos === 0 && marked);
        found[1] = found[1] + (xPos === 1 && marked);
        found[2] = found[2] + (xPos === 2 && marked);
        found[3] = found[3] + (xPos === 3 && marked);
        found[4] = found[4] + (xPos === 4 && marked);
        // rows
        found[5] = found[5] + (yPos === 0 && marked);
        found[6] = found[6] + (yPos === 1 && marked);
        found[7] = found[7] + (yPos === 2 && marked);
        found[8] = found[8] + (yPos === 3 && marked);
        found[9] = found[9] + (yPos === 4 && marked);
        // diagonal
        found[10] = found[10] + (xPos === yPos && marked);
        found[11] = found[11] + (xPos + yPos === GRID_SIZE - 1 && marked);
      }

      if (found.includes(GRID_SIZE)) {
        G.players[playerID].isWinner = true;
      } else {
        G.players[playerID].shoutCount -= 1;
      }

      return G;
    },
  },
  endIf: (G: IGameState) => {
    // if the callRef exceeds the length of callQueue
    if (G.callRef >= G.callQueue.length) {
      return { draw: true };
    }
    // if someone is marked as winner
    if (G.players[0].isWinner) {
      return { winner: '0' };
    }
    // if no shoutCount remains for each player
    if (G.players[0].shoutCount <= 0) {
      return { draw: true };
    }
    return null;
  },
};
