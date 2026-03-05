from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np
from datetime import datetime, timedelta
import random

app = Flask(__name__)
CORS(app)

@app.route('/api/energy-data', methods=['GET'])
def get_energy_data():
    return jsonify({
        'metrics': generate_metrics(),
        'chartData': generate_chart_data(),
        'alerts': generate_alerts(),
        'aiInsights': generate_ai_insights(),
        'wasteRooms': generate_waste_rooms(),
        'labs': generate_lab_data(),
        'comparison': generate_comparison_data(),
        'devices': generate_device_status(),
        'historical': generate_historical_data(),
        'costs': generate_cost_analysis()
    })

def generate_metrics():
    total_energy = round(20 + random.uniform(0, 10), 1)
    waste = round(total_energy * 0.02, 1)
    cost = int(total_energy * 8)
    co2 = round(total_energy * 0.82, 1)
    peak = round(total_energy * 1.8, 1)
    efficiency = round(90 + random.uniform(0, 8), 1)
    
    return {
        'totalEnergy': {'value': total_energy, 'unit': 'kW', 'label': 'Current campus load', 'trend': '+5.2%'},
        'energyWaste': {'value': waste, 'unit': 'kW', 'label': '2% of total', 'trend': '-1.3%'},
        'costPerHour': {'value': cost, 'unit': '₹', 'label': '@ ₹8/kWh', 'trend': '+4.8%'},
        'co2Impact': {'value': co2, 'unit': 'kg/hr', 'label': 'Carbon footprint', 'trend': '+5.1%'},
        'peakDemand': {'value': peak, 'unit': 'kW', 'label': 'Today at 14:30', 'trend': '+2.1%'},
        'efficiency': {'value': efficiency, 'unit': '%', 'label': 'System efficiency', 'trend': '+0.8%'}
    }

def generate_chart_data():
    data = []
    for i in range(24):
        base_load = 5 + random.uniform(0, 3)
        peak_multiplier = 3 + random.uniform(0, 2) if 8 <= i <= 18 else 1
        actual = base_load * peak_multiplier
        # Expected should be lower than actual to show waste
        expected = actual * (0.85 + random.uniform(0, 0.1))
        # Waste is the difference between actual and expected
        waste = max(0, actual - expected)
        
        data.append({
            'time': f'{i:02d}:00',
            'actual': round(actual, 2),
            'expected': round(expected, 2),
            'waste': round(waste, 2)
        })
    return data

def generate_alerts():
    return [
        {'id': 1, 'location': 'Computer Lab A', 'message': '15 idle PCs detected in Computer Lab A', 'severity': 'high', 'time': '2 min ago'},
        {'id': 2, 'location': 'Computer Lab B', 'message': '16 idle PCs detected in Computer Lab B', 'severity': 'high', 'time': '5 min ago'},
        {'id': 3, 'location': 'Physics Lab', 'message': 'Unusual power spike detected', 'severity': 'medium', 'time': '12 min ago'}
    ]

def generate_ai_insights():
    return {
        'prediction': {'value': round(20 + random.uniform(0, 10), 1), 'change': '+2.6%'},
        'anomalies': {'count': 0, 'status': 'All systems normal'},
        'confidence': {'value': round(90 + random.uniform(0, 8), 1), 'label': 'Prediction confidence'},
        'model': 'Isolation Forest · Linear Regression · KMeans'
    }

def generate_waste_rooms():
    rooms = ['Physics Lab', 'Classroom 103', 'Classroom 102', 'Classroom 201', 'Classroom 101']
    return [{'id': i+1, 'name': room, 'waste': round(random.uniform(0.05, 0.25), 2)} 
            for i, room in enumerate(rooms)]

def generate_lab_data():
    return [
        {'id': 'A', 'name': 'LAB-A', 'idleCount': 15, 'totalPCs': 30, 'waste': 33},
        {'id': 'B', 'name': 'LAB-B', 'idleCount': 16, 'totalPCs': 30, 'waste': 16},
        {'id': 'C', 'name': 'LAB-C', 'idleCount': 2, 'totalPCs': 20, 'waste': 2}
    ]

def generate_comparison_data():
    buildings = ['Main Hall', 'Lab Complex', 'Library', 'Dormitory A', 'Dormitory B']
    return [
        {
            'building': building,
            'current': round(random.uniform(4, 16), 1),
            'previous': round(random.uniform(4, 17), 1),
            'target': round(random.uniform(3, 15), 1)
        }
        for building in buildings
    ]

def generate_device_status():
    devices = [
        {'id': 1, 'name': 'HVAC System', 'status': 'online', 'power': 18.5, 'efficiency': 89},
        {'id': 2, 'name': 'Lighting Grid', 'status': 'online', 'power': 3.2, 'efficiency': 95},
        {'id': 3, 'name': 'Server Room', 'status': 'warning', 'power': 12.8, 'efficiency': 78},
        {'id': 4, 'name': 'Lab Equipment', 'status': 'online', 'power': 8.4, 'efficiency': 92},
        {'id': 5, 'name': 'Kitchen', 'status': 'offline', 'power': 0, 'efficiency': 0}
    ]
    return devices

def generate_historical_data():
    data = []
    for i in range(7):
        data.append({
            'date': f'Day {i+1}',
            'consumption': round(20 + random.uniform(0, 15), 2),
            'average': round(25 + random.uniform(0, 5), 2)
        })
    return data

def generate_cost_analysis():
    return {
        'today': 4656,
        'week': 32592,
        'month': 139680,
        'projected': 167616,
        'savings': 12480
    }

if __name__ == '__main__':
    app.run(debug=True, port=5000)
