import React, { useState } from 'react';
import './SettingsModal.css';

const SettingsModal = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState({
    refreshInterval: 30,
    alertThreshold: 15,
    costPerKwh: 8,
    enableNotifications: true,
    darkMode: true,
    autoExport: false
  });

  if (!isOpen) return null;

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('energySettings', JSON.stringify(settings));
    document.body.setAttribute('data-theme', settings.darkMode ? 'dark' : 'light');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <div className="setting-group">
            <label>Refresh Interval (seconds)</label>
            <input 
              type="number" 
              value={settings.refreshInterval}
              onChange={(e) => handleChange('refreshInterval', parseInt(e.target.value))}
              min="5"
              max="300"
            />
          </div>

          <div className="setting-group">
            <label>Alert Threshold (idle PCs)</label>
            <input 
              type="number" 
              value={settings.alertThreshold}
              onChange={(e) => handleChange('alertThreshold', parseInt(e.target.value))}
              min="1"
              max="50"
            />
          </div>

          <div className="setting-group">
            <label>Cost per kWh (₹)</label>
            <input 
              type="number" 
              value={settings.costPerKwh}
              onChange={(e) => handleChange('costPerKwh', parseInt(e.target.value))}
              min="1"
              max="50"
            />
          </div>

          <div className="setting-group checkbox">
            <label>
              <input 
                type="checkbox" 
                checked={settings.enableNotifications}
                onChange={(e) => handleChange('enableNotifications', e.target.checked)}
              />
              <span>Enable Notifications</span>
            </label>
          </div>

          <div className="setting-group checkbox">
            <label>
              <input 
                type="checkbox" 
                checked={settings.darkMode}
                onChange={(e) => handleChange('darkMode', e.target.checked)}
              />
              <span>Dark Mode</span>
            </label>
          </div>

          <div className="setting-group checkbox">
            <label>
              <input 
                type="checkbox" 
                checked={settings.autoExport}
                onChange={(e) => handleChange('autoExport', e.target.checked)}
              />
              <span>Auto Export Daily Reports</span>
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save" onClick={handleSave}>Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
