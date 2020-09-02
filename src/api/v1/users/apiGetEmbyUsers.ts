import axios from 'axios';
import { RequestHandler } from 'express';
import { EmbyService } from '../../../model/shared/embyService';

export const apiGetEmbyUsers: RequestHandler = (req, res, next) => {
	function getEmbyUsers() {
		const embyService = new EmbyService();

		return axios.get(embyService.getApiEmbyGetUsers());
	}

	axios
		.all([getEmbyUsers()])
		.then(
			axios.spread(function (embyUsers) {
				// das EmbyDto umwandeln auf ein für uns reduziertes Dto
				console.log(embyUsers);
				// Combine the results...
				res.send(embyUsers.data);
			}),
		)
		.catch((error) => {
			console.log(error);
			res.send(error);
		})
		.finally(() => {
			console.log('Request done');
		});
};
