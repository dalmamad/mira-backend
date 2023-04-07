export default class MsgListener {
  public static newMsg(msg: any, res: any) {
    console.log(msg);
    res({ status: true });
  }
}
