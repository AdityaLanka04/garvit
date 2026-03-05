import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './EnergyChart.css';

const EnergyChart = ({ data }) => {
  const chartData = data || generateMockData();

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>24-HOUR ENERGY TREND</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis dataKey="time" stroke="#666" style={{ fontSize: '12px' }} />
          <YAxis stroke="#666" style={{ fontSize: '12px' }} label={{ value: 'kW', angle: -90, position: 'insideLeft', fill: '#666' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px' }}
            labelStyle={{ color: '#888' }}
          />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} dot={false} name="Actual Usage" />
          <Line type="monotone" dataKey="expected" stroke="#6366f1" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Expected" />
          <Line type="monotone" dataKey="waste" stroke="#ef4444" strokeWidth={2} dot={false} name="Waste" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

function generateMockData() {
  const data = [];
  const hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  
  for (let i = 0; i < hours.length; i++) {
    const baseLoad = 5 + Math.random() * 3;
    const peakMultiplier = (i >= 8 && i <= 18) ? 3 + Math.random() * 2 : 1;
    const actual = baseLoad * peakMultiplier;
    const expected = actual * (0.95 + Math.random() * 0.1);
    const waste = Math.max(0, actual - expected) * 0.3;
    
    data.push({
      time: hours[i],
      actual: parseFloat(actual.toFixed(2)),
      expected: parseFloat(expected.toFixed(2)),
      waste: parseFloat(waste.toFixed(2))
    });
  }
  
  return data;
}

export default EnergyChart;
