export default function errorHandler(err: any, res: any) {
  console.log(err);
  res(err);
}
