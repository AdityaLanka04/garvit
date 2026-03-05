import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './HistoricalData.css';

const HistoricalData = ({ data }) => {
  const [timeRange, setTimeRange] = useState('7d');

  // Always generate data based on timeRange, ignore backend data for this component
  const historicalData = useMemo(() => {
    return generateHistoricalData(timeRange);
  }, [timeRange]);

  return (
    <div className="historical-container">
      <div className="historical-header">
        <h3>HISTORICAL TRENDS</h3>
        <div className="time-range-selector">
          <button className={timeRange === '24h' ? 'active' : ''} onClick={() => setTimeRange('24h')}>24H</button>
          <button className={timeRange === '7d' ? 'active' : ''} onClick={() => setTimeRange('7d')}>7D</button>
          <button className={timeRange === '30d' ? 'active' : ''} onClick={() => setTimeRange('30d')}>30D</button>
          <button className={timeRange === '90d' ? 'active' : ''} onClick={() => setTimeRange('90d')}>90D</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={historicalData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis dataKey="date" stroke="#666" style={{ fontSize: '11px' }} />
          <YAxis stroke="#666" style={{ fontSize: '11px' }} label={{ value: 'kW', angle: -90, position: 'insideLeft', fill: '#666' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px' }}
            labelStyle={{ color: '#888' }}
          />
          <Line type="monotone" dataKey="consumption" stroke="#3b82f6" strokeWidth={2} dot={false} name="Consumption" />
          <Line type="monotone" dataKey="average" stroke="#888" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Average" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

function generateHistoricalData(range) {
  const data = [];
  let points = 24;
  let format = 'time';
  
  if (range === '7d') {
    points = 7;
    format = 'day';
  } else if (range === '30d') {
    points = 30;
    format = 'day';
  } else if (range === '90d') {
    points = 90;
    format = 'day';
  }

  for (let i = 0; i < points; i++) {
    const consumption = 20 + Math.random() * 15;
    const average = 25 + Math.random() * 5;
    
    let label;
    if (format === 'time') {
      label = `${i.toString().padStart(2, '0')}:00`;
    } else if (range === '7d') {
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      label = days[i % 7];
    } else if (range === '30d') {
      label = `${i + 1}`;
    } else {
      label = `Day ${i + 1}`;
    }
    
    data.push({
      date: label,
      consumption: parseFloat(consumption.toFixed(2)),
      average: parseFloat(average.toFixed(2))
    });
  }
  
  return data;
}

export default HistoricalData;
