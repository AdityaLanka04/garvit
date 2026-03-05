import React from 'react';
import './CostAnalysis.css';

const CostAnalysis = ({ data }) => {
  const costData = data || {
    today: 4656,
    week: 32592,
    month: 139680,
    projected: 167616,
    savings: 12480
  };

  return (
    <div className="cost-analysis-container">
      <div className="cost-header">
        <h3>COST ANALYSIS</h3>
        <div className="currency-badge">INR</div>
      </div>
      <div className="cost-grid">
        <div className="cost-item primary">
          <div className="cost-label">Today</div>
          <div className="cost-value">₹{costData.today.toLocaleString()}</div>
        </div>
        <div className="cost-item">
          <div className="cost-label">This Week</div>
          <div className="cost-value">₹{costData.week.toLocaleString()}</div>
        </div>
        <div className="cost-item">
          <div className="cost-label">This Month</div>
          <div className="cost-value">₹{costData.month.toLocaleString()}</div>
        </div>
        <div className="cost-item">
          <div className="cost-label">Projected (Month)</div>
          <div className="cost-value">₹{costData.projected.toLocaleString()}</div>
        </div>
      </div>
      <div className="savings-banner">
        <div className="savings-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="savings-content">
          <div className="savings-label">Potential Monthly Savings</div>
          <div className="savings-amount">₹{costData.savings.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default CostAnalysis;
