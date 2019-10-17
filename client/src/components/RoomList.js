import React from 'react';
import RoomItem from './RoomItem';

const RoomList = ({ rooms }) => {
  const renderedRooms = rooms.map(room => {
    return <RoomItem key={room.id} room={room} />;
  });

  return <div className="room-list">{renderedRooms}</div>;
};

export default RoomList;
