const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const index = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'build')
});
const PORT = process.env.PORT || 3030;

index.use(cors())
index.use(jsonServer.bodyParser)
index.use(middlewares)
index.use(router)

index.use(router);
index.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});