import TokenServices from '../../services/token.service';

// TODO: adding type & sending statusCode
export default function socketAuth(socket: any, next: any) {
  try {
    TokenServices.TokenValidatoin(socket.handshake.auth.token);
    next();
  } catch (err: any) {
    next(err);
  }
}
