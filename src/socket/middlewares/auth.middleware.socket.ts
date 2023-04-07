import TokenServices from '../../services/token.service';

export default function socketAuth(socket: any, next: any) {
  try {
    TokenServices.TokenValidatoin(socket.handshake.auth.token);
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}
