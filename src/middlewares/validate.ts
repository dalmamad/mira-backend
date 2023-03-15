// import { Request, Response, NextFunction } from 'express';
// import joi from 'joi';
// import AppError from '../utils/app-error';
// import { joiSchema } from '../types/index.d';
// import pick from '../utils/pick';
//
// export default (schema: joiSchema) =>
//   (req: Request, res: Response, next: NextFunction) => {
//     const validSchema = pick(schema, ['params', 'query', 'body']);
//     const object = pick(req, Object.keys(validSchema));
//     const { error } = joi
//       .compile(validSchema)
//       .prefs({ errors: { label: 'key' }, abortEarly: false })
//       .validate(object);
//     if (error) {
//       throw new AppError(error.details[0].message, 400);
//     }
//     next();
//   };
