const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

const oneMonth = 1000 * 60 * 60 * 24 * 31; // 31 Days

export default {
	mongodbUri: 'mongodb+srv://uni-simulation:myUniSimulation@cluster0.1dhv9o5.mongodb.net/?retryWrites=true&w=majority',
	port: env.PORT || 8080,
	host: env.HOST || '0.0.0.0',
	sess_name: 'sid',
	sess_secret: 'myAppSecret@12345!',
	sess_lifetime: oneMonth,
	get serverUrl() {
		return `http://${this.env.host}:${this.env.port}`;
	}
};