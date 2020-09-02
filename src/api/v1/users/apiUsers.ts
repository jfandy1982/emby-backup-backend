import { Router } from 'express';
import { apiGetEmbyUsers } from './apiGetEmbyUsers';

export const usersRouter = Router();

usersRouter.route('/').get(apiGetEmbyUsers);

// usersRouter.route('/:id').get(apiGetEmbyUserDetail);
