import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  const fetchBackendMessage = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`${API_BASE_URL}/`);
      setBackendMessage(response.data.message);
    } catch (err) {
      setError('Failed to connect to backend: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchHealthStatus = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`${API_BASE_URL}/api/health`);
      setHealthStatus(`Status: ${response.data.status}, Service: ${response.data.service}`);
    } catch (err) {
      setError('Failed to fetch health status: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`${API_BASE_URL}/api/data`);
      setData(response.data.data);
    } catch (err) {
      setError('Failed to fetch data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auto-fetch backend message on component mount
    fetchBackendMessage();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Simple Frontend Application</h1>
        <p>React Frontend connecting to FastAPI Backend</p>
      </div>

      {error && (
        <div className="card" style={{backgroundColor: '#ffebee', border: '1px solid #f44336'}}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}

      <div className="card">
        <h2>Backend Connection</h2>
        <p><strong>Message from Backend:</strong> {backendMessage || 'Not fetched yet'}</p>
        <button className="button" onClick={fetchBackendMessage} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Backend Message'}
        </button>
      </div>

      <div className="card">
        <h2>Health Check</h2>
        <p><strong>Health Status:</strong> {healthStatus || 'Not checked yet'}</p>
        <button className="button" onClick={fetchHealthStatus} disabled={loading}>
          {loading ? 'Loading...' : 'Check Health'}
        </button>
      </div>

      <div className="card">
        <h2>Data from Backend</h2>
        <button className="button" onClick={fetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
        
        {data.length > 0 && (
          <div>
            <h3>Items:</h3>
            {data.map((item) => (
              <div key={item.id} className="data-item">
                <strong>{item.name}</strong> - {item.description}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
