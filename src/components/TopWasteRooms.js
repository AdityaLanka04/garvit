import React from 'react';
import './TopWasteRooms.css';

const TopWasteRooms = ({ rooms }) => {
  const roomData = rooms || [
    { id: 1, name: 'Physics Lab', waste: 0.22 },
    { id: 2, name: 'Classroom 103', waste: 0.19 },
    { id: 3, name: 'Classroom 102', waste: 0.18 },
    { id: 4, name: 'Classroom 201', waste: 0.09 },
    { id: 5, name: 'Classroom 101', waste: 0.08 }
  ];

  const maxWaste = Math.max(...roomData.map(r => r.waste));

  return (
    <div className="waste-rooms-container">
      <div className="waste-header">
        <h3>TOP 5 WASTE ROOMS</h3>
      </div>
      <div className="rooms-list">
        {roomData.map((room, index) => (
          <div key={room.id} className="room-item">
            <div className="room-rank">#{index + 1}</div>
            <div className="room-info">
              <div className="room-name">{room.name}</div>
              <div className="room-bar-container">
                <div 
                  className="room-bar" 
                  style={{ width: `${(room.waste / maxWaste) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="room-waste">{room.waste.toFixed(2)} kW</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWasteRooms;
