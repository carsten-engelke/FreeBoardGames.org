import * as React from 'react';
import { IScore } from './game';
import { IPlayerInRoom } from '../../App/Lobby/LobbyService';
import css from './ScoreBadges.css';

interface IScoreBadgesProps {
  scoreboard: IScore[];
  players: IPlayerInRoom[];
  playerID: string;
}

export class ScoreBadges extends React.Component<IScoreBadgesProps, {}> {
  render() {
    const badges = this.props.scoreboard.map(score => {
      const nickname = this.props.players.find(player => player.playerID === score.playerID).name;
      const isSelf = score.playerID.toString() === this.props.playerID;
      return (
        <div className={css.ScoreBadge} key={score.playerID}>
          <span className={css.Nickname} style={{ fontWeight: isSelf ? 'bold' : undefined }}>
            {nickname}
          </span>
          <span>{score.penaltyPoints}</span>
        </div>
      );
    });
    return <div style={{ clear: 'left', paddingTop: '8px' }}>{badges}</div>;
  }
}