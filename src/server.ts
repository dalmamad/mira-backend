import './env';
import App from './app';
import Socket from './socket/socket';

App.init();
Socket.init(App.server);
