import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET'],
  },
});

const userSocketMap = {};

io.on('connection', (socket) => {
  console.log(`User disconnected: ${socket.id}`);

  const userId = socket.handshake.query.userId;
  if (userId != 'undefined') {
    userSocketMap[userId] = socket.id;
  }

  //Used to get online users in Client
  socket.emit('getOnlineUsers', Object.keys(userSocketMap));

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    delete userSocketMap[userId];
    socket.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

export { app, io, server };
