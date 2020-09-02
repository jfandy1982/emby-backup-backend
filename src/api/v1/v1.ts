import { Router } from 'express';
import { apiCors } from './general/cors';
import { apiErrorHandler } from './general/errorHandling';
import { logger } from './general/logging';
import { apiValidation } from './general/validation';
import { usersRouter } from './users/apiUsers';

export const routerV1 = Router();

routerV1.use(apiCors);
routerV1.use(logger);
routerV1.use(apiValidation);

routerV1.get('/', (req, res, next) => {
	res.send('API for Emby Meta Data Consistency Checks');
});

routerV1.use('/emby_users', usersRouter);

routerV1.use(apiErrorHandler);
