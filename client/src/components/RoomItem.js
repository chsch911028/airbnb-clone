import React from 'react';

const RoomItem = props => {
  const {
    id,
    title,
    price,
    maxPeople,
    minNights,
    roomType,
    region,
    bedroomCounts,
    bedCounts,
    bathroomCounts,
    reviewCounts,
    star,
    files
  } = props.room;

  return (
    <div className="room-item">
      <div className="room-item-img">
        <img src={files[0].url} alt="test-room" />
      </div>
      <div className="room-item-desc">
        <div className="room-item-head">{title}</div>
        <div className="room-item-body">{`인원 ${maxPeople}명, 침실 ${bedroomCounts}개, 침대 ${bedCounts}개, 욕실 ${bathroomCounts}개`}</div>
        <div className="room-item-tail">
          <div className="room-item-start">{`${star} ${reviewCounts}`}</div>
          <div className="room-item-reservation">
            <span className="room-reservation-btn">예약</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
