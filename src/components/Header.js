import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 30);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h1>Campus Energy Leak Detector</h1>
            <p className="subtitle">AI-Powered Monitoring · Smart Anomaly Detection</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-export">Export Report</button>
          <button className="btn-live">
            <span className="live-dot"></span>
            LIVE · Refresh in {countdown}s
          </button>
          <button className="btn-settings">Settings</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
