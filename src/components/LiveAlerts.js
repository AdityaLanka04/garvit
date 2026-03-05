import React from 'react';
import './LiveAlerts.css';

const LiveAlerts = ({ alerts }) => {
  const alertData = alerts || [
    { id: 1, location: 'Computer Lab A', message: '15 idle PCs detected in Computer Lab A', severity: 'high', time: '2 min ago' },
    { id: 2, location: 'Computer Lab B', message: '16 idle PCs detected in Computer Lab B', severity: 'high', time: '5 min ago' },
    { id: 3, location: 'Physics Lab', message: 'Unusual power spike detected', severity: 'medium', time: '12 min ago' }
  ];

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'high':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'medium':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="alerts-container">
      <div className="alerts-header">
        <h3>LIVE ALERTS</h3>
        <span className="alert-badge">{alertData.length}</span>
      </div>
      <div className="alerts-list">
        {alertData.map(alert => (
          <div key={alert.id} className={`alert-item ${alert.severity}`}>
            <div className={`alert-icon ${alert.severity}`}>
              {getSeverityIcon(alert.severity)}
            </div>
            <div className="alert-content">
              <div className="alert-header-row">
                <div className="alert-title">{alert.location}</div>
                <div className="alert-time">{alert.time}</div>
              </div>
              <div className="alert-message">{alert.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveAlerts;
