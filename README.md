# DocCraft

A real-time collaborative document editor that allows multiple users to edit documents simultaneously.

## Features

- 🚀 Real-time collaboration with Socket.io
- 📝 Rich text editing with Quill.js
- 💾 Auto-save functionality
- 🔄 Live document synchronization
- 🎨 Material-UI based interface

## Tech Stack

**Frontend:**
- React
- Quill.js (Rich text editor)
- Socket.io Client
- Material-UI

**Backend:**
- Node.js
- Socket.io
- MongoDB (with Mongoose)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Backend Setup

```bash
cd backend
npm install
npm start
```

The backend server runs on `http://localhost:9000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend application runs on `http://localhost:3000`

## Usage

1. Start the MongoDB service
2. Run the backend server
3. Run the frontend application
4. Open your browser and navigate to `http://localhost:3000`
5. Share the document URL with others to collaborate in real-time

## License

ISC
