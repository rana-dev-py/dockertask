# Simple Frontend and Backend Docker Application

This project contains a simple React frontend and FastAPI backend application with Docker containerization.

## Project Structure

```
dockertask/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── nginx.conf
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Features

### Backend (FastAPI)
- Simple GET routes
- Health check endpoint
- CORS enabled for frontend communication
- Data API endpoint

### Frontend (React)
- Simple React application
- Connects to FastAPI backend
- Displays data from backend
- Health check functionality

## Running the Application

### Prerequisites
- Docker
- Docker Compose

### Commands

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Run in detached mode:**
   ```bash
   docker-compose up -d --build
   ```

3. **Stop the application:**
   ```bash
   docker-compose down
   ```

## Accessing the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **Backend Docs:** http://localhost:8000/docs

## API Endpoints

- `GET /` - Root message
- `GET /api/health` - Health check
- `GET /api/data` - Sample data

## Screenshots

Screenshots of the running application will be added after testing.
