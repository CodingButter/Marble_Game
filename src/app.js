const express = require("express");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const middlewares = require("./middlewares");

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.emit("news", { hello: "world" });

  console.log("someone connected");
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
