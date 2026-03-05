import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MetricsGrid from './components/MetricsGrid';
import EnergyChart from './components/EnergyChart';
import LiveAlerts from './components/LiveAlerts';
import AIInsights from './components/AIInsights';
import TopWasteRooms from './components/TopWasteRooms';
import LabMonitor from './components/LabMonitor';
import { fetchEnergyData } from './services/api';

function App() {
  const [energyData, setEnergyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEnergyData();
        setEnergyData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <div className="dashboard">
        <MetricsGrid data={energyData?.metrics} />
        <div className="main-content">
          <EnergyChart data={energyData?.chartData} />
          <LiveAlerts alerts={energyData?.alerts} />
        </div>
        <div className="bottom-section">
          <AIInsights insights={energyData?.aiInsights} />
          <TopWasteRooms rooms={energyData?.wasteRooms} />
          <LabMonitor labs={energyData?.labs} />
        </div>
      </div>
    </div>
  );
}

export default App;
