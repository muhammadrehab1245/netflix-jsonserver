const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const data = jsonServer.router("data.json");
const tvshows = jsonServer.router("tvshows.json");

server.use(middlewares);

// Custom routes for different JSON files
server.use(data);
server.use(tvshows);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
