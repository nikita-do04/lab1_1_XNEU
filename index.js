const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log(`Сервер працює: http://localhost:${port}`);
  console.log(`Swagger: http://localhost:${port}/api-docs`);
});
