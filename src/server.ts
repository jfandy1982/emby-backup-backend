import * as dotenv from 'dotenv';
import express from 'express';
import { routerV1 } from './api/v1/v1';

dotenv.config();

const app = express();

app.disable('x-powered-by');

app.use('/v1', routerV1);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Server started on localhost:' + port + '...');
});
