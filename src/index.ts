import './env';
import Socket from './socket/socket';
import Http from './http/app';

Http.init();
Socket.init(Http.server);
