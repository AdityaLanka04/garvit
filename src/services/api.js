import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchEnergyData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/energy-data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching energy data:', error);
    return getMockData();
  }
};

function getMockData() {
  return {
    metrics: {
      totalEnergy: { value: 24.2, unit: 'kW', label: 'Current campus load', trend: '+5.2%' },
      energyWaste: { value: 0.6, unit: 'kW', label: '2% of total', trend: '-1.3%' },
      costPerHour: { value: 194, unit: '₹', label: '@ ₹8/kWh', trend: '+4.8%' },
      co2Impact: { value: 19.9, unit: 'kg/hr', label: 'Carbon footprint', trend: '+5.1%' },
      peakDemand: { value: 45.8, unit: 'kW', label: 'Today at 14:30', trend: '+2.1%' },
      efficiency: { value: 92.5, unit: '%', label: 'System efficiency', trend: '+0.8%' }
    },
    alerts: [
      { id: 1, location: 'Computer Lab A', message: '15 idle PCs detected in Computer Lab A', severity: 'high', time: '2 min ago' },
      { id: 2, location: 'Computer Lab B', message: '16 idle PCs detected in Computer Lab B', severity: 'high', time: '5 min ago' },
      { id: 3, location: 'Physics Lab', message: 'Unusual power spike detected', severity: 'medium', time: '12 min ago' }
    ],
    aiInsights: {
      prediction: { value: 24.9, change: '+2.6%' },
      anomalies: { count: 0, status: 'All systems normal' },
      confidence: { value: 94.2, label: 'Prediction confidence' },
      model: 'Isolation Forest · Linear Regression · KMeans'
    },
    wasteRooms: [
      { id: 1, name: 'Physics Lab', waste: 0.22 },
      { id: 2, name: 'Classroom 103', waste: 0.19 },
      { id: 3, name: 'Classroom 102', waste: 0.18 },
      { id: 4, name: 'Classroom 201', waste: 0.09 },
      { id: 5, name: 'Classroom 101', waste: 0.08 }
    ],
    labs: [
      { id: 'A', name: 'LAB-A', idleCount: 15, totalPCs: 30, waste: 33 },
      { id: 'B', name: 'LAB-B', idleCount: 16, totalPCs: 30, waste: 16 },
      { id: 'C', name: 'LAB-C', idleCount: 2, totalPCs: 20, waste: 2 }
    ],
    comparison: [
      { building: 'Main Hall', current: 8.5, previous: 9.2, target: 7.8 },
      { building: 'Lab Complex', current: 12.3, previous: 11.8, target: 10.5 },
      { building: 'Library', current: 4.2, previous: 4.8, target: 4.0 },
      { building: 'Dormitory A', current: 15.6, previous: 16.2, target: 14.0 },
      { building: 'Dormitory B', current: 14.8, previous: 15.5, target: 13.5 }
    ],
    devices: [
      { id: 1, name: 'HVAC System', status: 'online', power: 18.5, efficiency: 89 },
      { id: 2, name: 'Lighting Grid', status: 'online', power: 3.2, efficiency: 95 },
      { id: 3, name: 'Server Room', status: 'warning', power: 12.8, efficiency: 78 },
      { id: 4, name: 'Lab Equipment', status: 'online', power: 8.4, efficiency: 92 },
      { id: 5, name: 'Kitchen', status: 'offline', power: 0, efficiency: 0 }
    ],
    costs: {
      today: 4656,
      week: 32592,
      month: 139680,
      projected: 167616,
      savings: 12480
    }
  };
}

export default {
  fetchEnergyData
};
