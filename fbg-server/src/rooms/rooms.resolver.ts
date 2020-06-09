import { Resolver, Mutation, Args, Subscription } from '@nestjs/graphql';
import { Room } from './gql/Room.gql';
import { NewRoomInput } from './gql/NewRoomInput.gql';
import { NewRoom } from './gql/NewRoom.gql';
import { RoomsService } from './rooms.service';
import { CurrentUser, GqlAuthGuard } from '../users/gql-auth-guard';
import { UseGuards } from '@nestjs/common';
import { roomEntityToRoom } from './RoomUtil';
import { PubSub } from 'graphql-subscriptions';

@Resolver((of) => Room)
export class RoomsResolver {
  constructor(private roomsService: RoomsService, private pubSub: PubSub) {}

  @Mutation((returns) => NewRoom)
  @UseGuards(GqlAuthGuard)
  async newRoom(
    @CurrentUser() currentUser,
    @Args({ name: 'room', type: () => NewRoomInput }) room: NewRoomInput,
  ) {
    const roomEntity = await this.roomsService.newRoom(room, currentUser.id);
    return { roomId: roomEntity.id };
  }

  @Mutation((returns) => Room)
  @UseGuards(GqlAuthGuard)
  async joinRoom(
    @CurrentUser() currentUser,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
  ) {
    const userId = currentUser.id;
    const roomEntity = await this.roomsService.joinRoom(userId, roomId);
    const room = roomEntityToRoom(roomEntity);
    return { ...room, userId };
  }

  @Subscription((returns) => Room)
  roomMutated(@Args({ name: 'roomId', type: () => String }) roomId: string) {
    return this.pubSub.asyncIterator(`room/${roomId}`);
  }
}