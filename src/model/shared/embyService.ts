export class EmbyService {
	private apiHostName = process.env.EMBY_API_HOST;
	private apiPort = process.env.EMBY_API_PORT;
	private apiKey = process.env.EMBY_API_KEY;

	// Emby API area "System"
	private apiEmbySystemInfo = 'System/Info/Public';

	// Emby API area "Users"
	private apiEmbyGetUsers = 'Users';

	private getApiEndpoint(endpoint: string): string {
		return (
			'http://' + this.apiHostName + ':' + this.apiPort + '/emby/' + endpoint
		);
	}

	private getApiEndpointWithApiKey(endpoint: string): string {
		return this.getApiEndpoint(endpoint) + '?api_key=' + this.apiKey;
	}

	getApiEmbyGetUsers(): string {
		return this.getApiEndpointWithApiKey(this.apiEmbyGetUsers);
	}

	getApiEmbySystemInfo(): string {
		return this.getApiEndpoint(this.apiEmbySystemInfo);
	}
}
