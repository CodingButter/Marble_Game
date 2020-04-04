const socket = io.connect();
socket.on("news", (data) => {
  console.log(data);
  socket.emit("my other event", { my: "data" });
});

export default socket;
