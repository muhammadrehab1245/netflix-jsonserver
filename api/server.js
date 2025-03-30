const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const data = jsonServer.router("data.json");
const tvshows = jsonServer.router("tvshows.json");

server.use(middlewares);
server.use(data);
// server.use("/tv", tvshows);

module.exports = (req, res) => {
  server(req, res); // No listen here, Vercel handles it
};
