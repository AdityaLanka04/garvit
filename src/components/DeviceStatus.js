import React from 'react';
import './DeviceStatus.css';

const DeviceStatus = ({ devices }) => {
  const deviceData = devices || [
    { id: 1, name: 'HVAC System', status: 'online', power: 18.5, efficiency: 89 },
    { id: 2, name: 'Lighting Grid', status: 'online', power: 3.2, efficiency: 95 },
    { id: 3, name: 'Server Room', status: 'warning', power: 12.8, efficiency: 78 },
    { id: 4, name: 'Lab Equipment', status: 'online', power: 8.4, efficiency: 92 },
    { id: 5, name: 'Kitchen', status: 'offline', power: 0, efficiency: 0 }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'online':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="currentColor"/>
          </svg>
        );
      case 'warning':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'offline':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="device-status-container">
      <div className="device-header">
        <h3>DEVICE STATUS</h3>
        <div className="device-summary">
          <span className="summary-item online">{deviceData.filter(d => d.status === 'online').length} Online</span>
          <span className="summary-item warning">{deviceData.filter(d => d.status === 'warning').length} Warning</span>
          <span className="summary-item offline">{deviceData.filter(d => d.status === 'offline').length} Offline</span>
        </div>
      </div>
      <div className="device-list">
        {deviceData.map(device => (
          <div key={device.id} className="device-item">
            <div className="device-info">
              <div className={`device-status-icon ${device.status}`}>
                {getStatusIcon(device.status)}
              </div>
              <div className="device-details">
                <div className="device-name">{device.name}</div>
                <div className="device-stats">
                  <span className="device-power">{device.power} kW</span>
                  <span className="device-separator">·</span>
                  <span className="device-efficiency">{device.efficiency}% efficiency</span>
                </div>
              </div>
            </div>
            <div className="device-progress">
              <div className="progress-bar" style={{ width: `${device.efficiency}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceStatus;
