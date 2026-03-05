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
        'labs': generate_lab_data()
    })

def generate_metrics():
    total_energy = round(20 + random.uniform(0, 10), 1)
    waste = round(total_energy * 0.02, 1)
    cost = int(total_energy * 8)
    co2 = round(total_energy * 0.82, 1)
    
    return {
        'totalEnergy': {'value': total_energy, 'unit': 'kW', 'label': 'Current campus load'},
        'energyWaste': {'value': waste, 'unit': 'kW', 'label': '2% of total'},
        'costPerHour': {'value': cost, 'unit': '₹', 'label': '@ ₹8/kWh'},
        'co2Impact': {'value': co2, 'unit': 'kg/hr', 'label': 'Carbon footprint'}
    }

def generate_chart_data():
    data = []
    for i in range(24):
        base_load = 5 + random.uniform(0, 3)
        peak_multiplier = 3 + random.uniform(0, 2) if 8 <= i <= 18 else 1
        actual = base_load * peak_multiplier
        expected = actual * (0.95 + random.uniform(0, 0.1))
        waste = max(0, actual - expected) * 0.3
        
        data.append({
            'time': f'{i:02d}:00',
            'actual': round(actual, 2),
            'expected': round(expected, 2),
            'waste': round(waste, 2)
        })
    return data

def generate_alerts():
    return [
        {'id': 1, 'location': 'Computer Lab A', 'message': '15 idle PCs detected in Computer Lab A', 'severity': 'high'},
        {'id': 2, 'location': 'Computer Lab B', 'message': '16 idle PCs detected in Computer Lab B', 'severity': 'high'}
    ]

def generate_ai_insights():
    return {
        'prediction': {'value': round(20 + random.uniform(0, 10), 1), 'change': '+2.6%'},
        'anomalies': {'count': 0, 'status': 'all normal'},
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

if __name__ == '__main__':
    app.run(debug=True, port=5000)
