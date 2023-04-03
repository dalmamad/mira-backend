import Ajv from 'ajv';
import addFormat from 'ajv-formats';
import { ValidateSchema } from '../interfaces/index.interface';

const ajv = new Ajv({ $data: true });
addFormat(ajv);

function pickSchema(schema: ValidateSchema): ValidateSchema {
  return (['body', 'params', 'query'] as Array<keyof ValidateSchema>).reduce(
    (obj: ValidateSchema, key) => {
      if (schema[key]) obj[key] = schema[key];
      return obj;
    },
    {}
  );
}

export default function getValidate(schema: ValidateSchema): ValidateSchema {
  const validateSchema: ValidateSchema = {};
  const pickedSchema = pickSchema(schema);
  (Object.keys(pickedSchema) as Array<keyof ValidateSchema>).forEach((key) => {
    validateSchema[key] = ajv.compile(pickedSchema[key]);
  });
  return validateSchema;
}
