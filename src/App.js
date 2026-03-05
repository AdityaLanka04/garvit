import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MetricsGrid from './components/MetricsGrid';
import EnergyChart from './components/EnergyChart';
import LiveAlerts from './components/LiveAlerts';
import AIInsights from './components/AIInsights';
import TopWasteRooms from './components/TopWasteRooms';
import LabMonitor from './components/LabMonitor';
import EnergyComparison from './components/EnergyComparison';
import DeviceStatus from './components/DeviceStatus';
import HistoricalData from './components/HistoricalData';
import CostAnalysis from './components/CostAnalysis';
import SettingsModal from './components/SettingsModal';
import { fetchEnergyData } from './services/api';

function App() {
  const [energyData, setEnergyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Load theme preference
    const savedSettings = localStorage.getItem('energySettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setIsDarkMode(settings.darkMode !== false);
      document.body.setAttribute('data-theme', settings.darkMode !== false ? 'dark' : 'light');
    }
  }, []);

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

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
    // Reload theme preference
    const savedSettings = localStorage.getItem('energySettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setIsDarkMode(settings.darkMode !== false);
      document.body.setAttribute('data-theme', settings.darkMode !== false ? 'dark' : 'light');
    }
  };

  const handleExport = () => {
    if (!energyData) return;

    const exportData = {
      timestamp: new Date().toISOString(),
      metrics: energyData.metrics,
      alerts: energyData.alerts,
      aiInsights: energyData.aiInsights,
      wasteRooms: energyData.wasteRooms,
      labs: energyData.labs,
      comparison: energyData.comparison,
      devices: energyData.devices,
      costs: energyData.costs
    };

    // Create CSV format
    let csv = 'Campus Energy Leak Detector Report\n';
    csv += `Generated: ${new Date().toLocaleString()}\n\n`;
    
    // Metrics
    csv += 'METRICS\n';
    csv += 'Metric,Value,Unit,Label,Trend\n';
    Object.entries(energyData.metrics).forEach(([key, data]) => {
      csv += `${key},${data.value},${data.unit},${data.label},${data.trend}\n`;
    });
    
    // Alerts
    csv += '\nALERTS\n';
    csv += 'Location,Message,Severity,Time\n';
    energyData.alerts.forEach(alert => {
      csv += `${alert.location},"${alert.message}",${alert.severity},${alert.time}\n`;
    });
    
    // Waste Rooms
    csv += '\nTOP WASTE ROOMS\n';
    csv += 'Room,Waste (kW)\n';
    energyData.wasteRooms.forEach(room => {
      csv += `${room.name},${room.waste}\n`;
    });
    
    // Devices
    csv += '\nDEVICE STATUS\n';
    csv += 'Device,Status,Power (kW),Efficiency (%)\n';
    energyData.devices.forEach(device => {
      csv += `${device.name},${device.status},${device.power},${device.efficiency}\n`;
    });
    
    // Costs
    csv += '\nCOST ANALYSIS\n';
    csv += 'Period,Amount (₹)\n';
    csv += `Today,${energyData.costs.today}\n`;
    csv += `This Week,${energyData.costs.week}\n`;
    csv += `This Month,${energyData.costs.month}\n`;
    csv += `Projected Month,${energyData.costs.projected}\n`;
    csv += `Potential Savings,${energyData.costs.savings}\n`;

    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `energy-report-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <Header 
        onExport={handleExport}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />
      <div className="dashboard">
        <MetricsGrid data={energyData?.metrics} />
        <div className="main-content">
          <EnergyChart data={energyData?.chartData} />
          <LiveAlerts alerts={energyData?.alerts} />
        </div>
        <div className="middle-section">
          <EnergyComparison data={energyData?.comparison} />
          <DeviceStatus devices={energyData?.devices} />
        </div>
        <div className="bottom-section">
          <HistoricalData data={energyData?.historical} />
          <CostAnalysis data={energyData?.costs} />
        </div>
        <div className="final-section">
          <AIInsights insights={energyData?.aiInsights} />
          <TopWasteRooms rooms={energyData?.wasteRooms} />
          <LabMonitor labs={energyData?.labs} />
        </div>
      </div>
      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={handleSettingsClose}
      />
    </div>
  );
}

export default App;
