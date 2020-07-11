import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.disable('x-powered-by');

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Server started on localhost:' + port + '...');
});
