import './env';
import Socket from './socket/socket';
import App from './http/app';

App.init();
Socket.init(App.server);
