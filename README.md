# Simple Card List Application - Setup Guide

## Quick Start

### Backend Setup
```bash
# 1. Navigate to backend directory
cd backend

# 2. Install dependencies
npm install express cors dotenv

# 3. Start server
node index.js
```
Server will run on http://localhost:5888

### Frontend Setup
```bash
# 1. Open new terminal and navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled axios

# 3. Start application
npm start
```
Application will open automatically at http://localhost:3000

### Run Tests
```bash
# In frontend directory
npm test
```

## Note
- Keep both terminal windows open (backend and frontend)
- Backend must be running for frontend to work properly