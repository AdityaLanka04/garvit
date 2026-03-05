import React from 'react';
import './MetricsGrid.css';

const MetricsGrid = ({ data }) => {
  const metrics = data || {
    totalEnergy: { value: 24.2, unit: 'kW', label: 'Current campus load', trend: '+5.2%' },
    energyWaste: { value: 0.6, unit: 'kW', label: '2% of total', trend: '-1.3%' },
    costPerHour: { value: 194, unit: '₹', label: '@ ₹8/kWh', trend: '+4.8%' },
    co2Impact: { value: 19.9, unit: 'kg/hr', label: 'Carbon footprint', trend: '+5.1%' },
    peakDemand: { value: 45.8, unit: 'kW', label: 'Today at 14:30', trend: '+2.1%' },
    efficiency: { value: 92.5, unit: '%', label: 'System efficiency', trend: '+0.8%' }
  };

  return (
    <div className="metrics-grid">
      <div className="metric-card">
        <div className="metric-header">
          <span className="metric-label">TOTAL ENERGY</span>
          <div className="metric-icon-wrapper energy">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div className="metric-value">{metrics.totalEnergy.value} {metrics.totalEnergy.unit}</div>
        <div className="metric-footer">
          <span className="metric-sublabel">{metrics.totalEnergy.label}</span>
          <span className="metric-trend positive">{metrics.totalEnergy.trend}</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-header">
          <span className="metric-label">ENERGY WASTE</span>
          <div className="metric-icon-wrapper waste">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className="metric-value">{metrics.energyWaste.value} {metrics.energyWaste.unit}</div>
        <div className="metric-footer">
          <span className="metric-sublabel">{metrics.energyWaste.label}</span>
          <span className="metric-trend negative">{metrics.energyWaste.trend}</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-header">
          <span className="metric-label">COST / HOUR</span>
          <div className="metric-icon-wrapper cost">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v12M9 9h6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className="metric-value">{metrics.costPerHour.unit}{metrics.costPerHour.value}</div>
        <div className="metric-footer">
          <span className="metric-sublabel">{metrics.costPerHour.label}</span>
          <span className="metric-trend positive">{metrics.costPerHour.trend}</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-header">
          <span className="metric-label">CO₂ IMPACT</span>
          <div className="metric-icon-wrapper co2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className="metric-value">{metrics.co2Impact.value} {metrics.co2Impact.unit}</div>
        <div className="metric-footer">
          <span className="metric-sublabel">{metrics.co2Impact.label}</span>
          <span className="metric-trend positive">{metrics.co2Impact.trend}</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-header">
          <span className="metric-label">PEAK DEMAND</span>
          <div className="metric-icon-wrapper peak">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 20l6-8 4 4 8-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="metric-value">{metrics.peakDemand.value} {metrics.peakDemand.unit}</div>
        <div className="metric-footer">
          <span className="metric-sublabel">{metrics.peakDemand.label}</span>
          <span className="metric-trend positive">{metrics.peakDemand.trend}</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-header">
          <span className="metric-label">EFFICIENCY</span>
          <div className="metric-icon-wrapper efficiency">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="metric-value">{metrics.efficiency.value}{metrics.efficiency.unit}</div>
        <div className="metric-footer">
          <span className="metric-sublabel">{metrics.efficiency.label}</span>
          <span className="metric-trend positive">{metrics.efficiency.trend}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricsGrid;
