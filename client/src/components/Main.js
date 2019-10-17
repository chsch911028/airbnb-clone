import React, { useEffect, useState } from 'react';
import RoomList from './RoomList';
import { getRooms } from '../apis';

const Main = props => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms().then(({ data }) => {
      setRooms(data.slice(0, 20));
    });
  }, []);

  return (
    <div className="main">
      <div className="describe">서울의 숙소 300개</div>
      <RoomList rooms={rooms} />
    </div>
  );
};

export default Main;
