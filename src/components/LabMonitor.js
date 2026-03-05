import React from 'react';
import './LabMonitor.css';

const LabMonitor = ({ labs }) => {
  const labData = labs || [
    { id: 'A', name: 'LAB-A', idleCount: 15, totalPCs: 30, waste: 33 },
    { id: 'B', name: 'LAB-B', idleCount: 16, totalPCs: 30, waste: 16 },
    { id: 'C', name: 'LAB-C', idleCount: 2, totalPCs: 20, waste: 2 }
  ];

  const renderPCGrid = (total, idle) => {
    const pcs = [];
    for (let i = 0; i < total; i++) {
      pcs.push(
        <div 
          key={i} 
          className={`pc-box ${i < idle ? 'idle' : 'active'}`}
        ></div>
      );
    }
    return pcs;
  };

  return (
    <div className="lab-monitor-container">
      <div className="lab-header">
        <h3>LAB COMPUTER MONITOR</h3>
        <div className="lab-status">38 HRS ON · <span className="waste-highlight">33 idle waste</span></div>
      </div>
      <div className="labs-grid">
        {labData.map(lab => (
          <div key={lab.id} className="lab-section">
            <div className="lab-title">{lab.name}</div>
            <div className="pc-grid">
              {renderPCGrid(lab.totalPCs, lab.idleCount)}
            </div>
            <div className="lab-stats">
              <span className="idle-count">{lab.idleCount} idle</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabMonitor;
