import express from 'express';

const app = express();

app.disable('x-powered-by');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server started on localhost:' + port + '...');
});
