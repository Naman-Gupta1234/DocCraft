# DocCraft

A real-time collaborative document editing application built with Node.js, Socket.io, and MongoDB.

## 📝 Description

DocCraft is a collaborative document editor that allows multiple users to work on the same document simultaneously. It provides real-time synchronization of changes across all connected clients, similar to Google Docs.

## ✨ Features

- **Real-time Collaboration**: Multiple users can edit documents simultaneously
- **Auto-save**: Documents are automatically saved to the database
- **WebSocket Communication**: Fast and efficient real-time data synchronization
- **Persistent Storage**: Documents are stored in MongoDB for persistence
- **Unique Document IDs**: Each document has a unique identifier for easy sharing

## 🛠️ Tech Stack

### Backend
- **Node.js**: JavaScript runtime environment
- **Socket.io**: Real-time bidirectional event-based communication
- **MongoDB**: NoSQL database for document storage
- **Mongoose**: MongoDB object modeling for Node.js
- **Nodemon**: Development tool for auto-restarting the server

## 📁 Project Structure

```
DocCraft/
├── backend/
│   ├── controller/
│   │   └── document-controller.js    # Document CRUD operations
│   ├── database/
│   │   └── db.js                      # MongoDB connection configuration
│   ├── Schema/
│   │   └── documentSchema.js          # Mongoose document schema
│   ├── index.js                       # Main server file
│   └── package.json                   # Backend dependencies
├── frontend/                          # Frontend directory (to be implemented)
└── .gitignore                         # Git ignore file
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/Naman-Gupta1234/DocCraft.git
cd DocCraft
```

2. Navigate to the backend directory:
```bash
cd backend
```

3. Install dependencies:
```bash
npm install
```

4. Configure MongoDB connection:
   - Open `database/db.js`
   - **Important**: Do not use hardcoded credentials in production
   - For development, update the connection string with your credentials
   - For production, use environment variables to store sensitive credentials securely

5. Start the development server:
```bash
npm start
```

The server will start on port 9000.

## 💡 Usage

### Starting the Backend Server

```bash
cd backend
npm start
```

The Socket.io server will be available at `http://localhost:9000`

### Socket Events

The application uses the following Socket.io events:

#### Client → Server Events:
- **`get-document`**: Request a document by ID
  - Payload: `documentId` (string)
  - Response: Server emits `load-document` with document data

- **`send-changes`**: Send document changes to other clients
  - Payload: `delta` (object) - The changes made to the document

- **`save-document`**: Save document changes to the database
  - Payload: `data` (object) - The complete document data

#### Server → Client Events:
- **`load-document`**: Receive the initial document data
  - Payload: `data` (object) - The document content

- **`receive-changes`**: Receive changes from other clients
  - Payload: `delta` (object) - The changes made by another user

## 🔌 API Details

### Database Schema

Documents are stored with the following schema:

```javascript
{
  _id: String,        // Unique document identifier
  data: Object        // Document content and formatting
}
```

### Controller Functions

- **`getDocument(id)`**: Retrieves a document by ID or creates a new one if it doesn't exist
- **`updateDocument(id, data)`**: Updates an existing document with new data

## 🌐 CORS Configuration

The backend is configured to accept connections from:
- `http://localhost:3000` (default frontend URL)

To modify allowed origins, update the CORS configuration in `backend/index.js`.

## 🔧 Configuration

You can customize the following settings:

- **Port**: Default is `9000` (modify in `index.js`)
- **MongoDB Connection**: Update credentials in `database/db.js`
  - **Recommended**: Use environment variables for database credentials (especially in production)
  - Create a `.env` file and load credentials using a package like `dotenv`
- **Frontend URL**: Default is `http://localhost:3000` (modify CORS settings in `index.js`)

## 📦 Dependencies

- **mongoose**: ^7.5.0
- **nodemon**: ^3.0.1
- **socket.io**: ^4.7.2

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created by Naman Gupta

## 🙏 Acknowledgments

Inspired by collaborative document editing platforms like Google Docs.
