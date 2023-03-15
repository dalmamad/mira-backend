import { anyObj } from '../types/index.d';

export default (object: anyObj, keys: string[]): object =>
  keys.reduce((obj: anyObj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
