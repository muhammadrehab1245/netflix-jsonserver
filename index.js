const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const data = jsonServer.router("data.json");
const tvshows = jsonServer.router("tvshows.json");

server.use(middlewares);

// Custom route prefixes
server.use("/api/moviesdata", data);
server.use("/api/tv", tvshows);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
