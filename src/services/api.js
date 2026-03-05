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
      totalEnergy: { value: 24.2, unit: 'kW', label: 'Current campus load' },
      energyWaste: { value: 0.6, unit: 'kW', label: '2% of total' },
      costPerHour: { value: 194, unit: '₹', label: '@ ₹8/kWh' },
      co2Impact: { value: 19.9, unit: 'kg/hr', label: 'Carbon footprint' }
    },
    alerts: [
      { id: 1, location: 'Computer Lab A', message: '15 idle PCs detected in Computer Lab A', severity: 'high' },
      { id: 2, location: 'Computer Lab B', message: '16 idle PCs detected in Computer Lab B', severity: 'high' }
    ],
    aiInsights: {
      prediction: { value: 24.9, change: '+2.6%' },
      anomalies: { count: 0, status: 'all normal' },
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
    ]
  };
}

export default {
  fetchEnergyData
};
