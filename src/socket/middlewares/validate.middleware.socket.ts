import BadRequestError from '../../errors/bad-request.error';

export default function validate(validator: any, data: any) {
  if (!validator(data)) {
    throw new BadRequestError(validator.errors[0].message);
  }
}
