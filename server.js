const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server,{cors:'*'});

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "public")));

// Run when client connects
io.on("connection", (socket) => {
  console.log("NEW user websocket connected");

  socket.on("message", (message) => {console.log(message)
io.emit('message',`${socket.id.substr(0,2)} said ${message}`)});
});
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
