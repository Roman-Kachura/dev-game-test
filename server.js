const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'build')
});
const PORT = process.env.PORT || 3030;

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});