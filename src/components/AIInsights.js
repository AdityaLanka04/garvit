import React from 'react';
import './AIInsights.css';

const AIInsights = ({ insights }) => {
  const data = insights || {
    prediction: { value: 24.9, change: '+2.6%' },
    anomalies: { count: 0, status: 'all normal' },
    model: 'Isolation Forest · Linear Regression · KMeans'
  };

  return (
    <div className="insights-container">
      <div className="insights-header">
        <h3>🤖 AI INSIGHTS</h3>
      </div>
      <div className="insights-content">
        <div className="insight-item">
          <div className="insight-label">PREDICTED NEXT HOUR</div>
          <div className="insight-value">{data.prediction.value} kW <span className="change positive">{data.prediction.change}</span></div>
        </div>
        <div className="insight-item">
          <div className="insight-label">ANOMALIES DETECTED</div>
          <div className="insight-value anomaly-status">
            <span className="status-badge success">{data.anomalies.count}</span>
            <span className="status-text">{data.anomalies.status}</span>
          </div>
        </div>
        <div className="insight-footer">
          <span className="model-info">{data.model}</span>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
