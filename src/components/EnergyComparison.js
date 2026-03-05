import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './EnergyComparison.css';

const EnergyComparison = ({ data }) => {
  const comparisonData = data || [
    { building: 'Main Hall', current: 8.5, previous: 9.2, target: 7.8 },
    { building: 'Lab Complex', current: 12.3, previous: 11.8, target: 10.5 },
    { building: 'Library', current: 4.2, previous: 4.8, target: 4.0 },
    { building: 'Dormitory A', current: 15.6, previous: 16.2, target: 14.0 },
    { building: 'Dormitory B', current: 14.8, previous: 15.5, target: 13.5 }
  ];

  return (
    <div className="comparison-container">
      <div className="comparison-header">
        <h3>BUILDING ENERGY COMPARISON</h3>
        <div className="comparison-legend">
          <span className="legend-item"><span className="legend-dot current"></span>Current</span>
          <span className="legend-item"><span className="legend-dot previous"></span>Previous Week</span>
          <span className="legend-item"><span className="legend-dot target"></span>Target</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis dataKey="building" stroke="#666" style={{ fontSize: '11px' }} />
          <YAxis stroke="#666" style={{ fontSize: '11px' }} label={{ value: 'kW', angle: -90, position: 'insideLeft', fill: '#666' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px' }}
            labelStyle={{ color: '#888' }}
          />
          <Bar dataKey="current" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="previous" fill="#6366f1" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" fill="#22c55e" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyComparison;
