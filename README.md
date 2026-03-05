# Campus Energy Leak Detector

AI-powered energy monitoring system for campus facilities with real-time anomaly detection.

## Features

- Real-time energy consumption monitoring
- AI-based anomaly detection using Isolation Forest, Linear Regression, and KMeans
- Live alerts for idle computer labs
- 24-hour energy trend visualization
- Top waste rooms tracking
- Lab computer monitoring with visual grid
- CO₂ impact calculation

## Tech Stack

### Frontend
- React 18
- Recharts for data visualization
- Axios for API calls
- CSS3 with modern gradients and animations

### Backend
- Python Flask
- NumPy for data processing
- Scikit-learn for ML models
- Flask-CORS for cross-origin requests

## Setup Instructions

### Backend Setup (Python with venv)

1. Navigate to backend directory:
\`\`\`bash
cd backend
\`\`\`

2. Create virtual environment:
\`\`\`bash
python3 -m venv venv
\`\`\`

3. Activate virtual environment:
\`\`\`bash
# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\\Scripts\\activate
\`\`\`

4. Install dependencies:
\`\`\`bash
pip install -r requirements.txt
\`\`\`

5. Run the Flask server:
\`\`\`bash
python app.py
\`\`\`

The backend will run on http://localhost:5000

### Frontend Setup (React)

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm start
\`\`\`

The app will open at http://localhost:3000

## Project Structure

\`\`\`
├── backend/
│   ├── app.py              # Flask API server
│   ├── requirements.txt    # Python dependencies
│   └── venv/              # Virtual environment (created after setup)
├── public/
│   └── index.html         # HTML template
├── src/
│   ├── components/        # React components
│   │   ├── Header.js
│   │   ├── MetricsGrid.js
│   │   ├── EnergyChart.js
│   │   ├── LiveAlerts.js
│   │   ├── AIInsights.js
│   │   ├── TopWasteRooms.js
│   │   └── LabMonitor.js
│   ├── services/
│   │   └── api.js         # API service layer
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
├── package.json           # Node dependencies
└── README.md
\`\`\`

## API Endpoints

- \`GET /api/energy-data\` - Returns all dashboard data including metrics, charts, alerts, and AI insights

## Development

The app auto-refreshes data every 30 seconds. Mock data is used when the backend is unavailable.

## License

MIT
# garvit
