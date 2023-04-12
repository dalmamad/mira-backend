import Ajv, { KeywordDefinition } from 'ajv';
import addFormat from 'ajv-formats';
import { ValidateSchema } from '../types/index.d';

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

export function getValidate(schema: ValidateSchema): ValidateSchema {
  const validateSchema: ValidateSchema = {};
  const pickedSchema = pickSchema(schema);
  (Object.keys(pickedSchema) as Array<keyof ValidateSchema>).forEach((key) => {
    validateSchema[key] = ajv.compile(pickedSchema[key]);
  });
  return validateSchema;
}

export function getSocketValidate(schema: any) {
  return ajv.compile(schema);
}

function queryNumRange(value: string, min?: number, max?: number) {
  const valueNum = parseInt(value, 10);
  if (min !== undefined && valueNum < min) {
    return false;
  }
  if (max !== undefined && valueNum > max) {
    return false;
  }
  return true;
}

const queryNumRangeKeyword: KeywordDefinition = {
  keyword: 'queryNumRange',
  type: 'string',
  validate(schema: true | { min?: number; max?: number }, data: string) {
    if (schema === true) {
      return true;
    }
    if (!schema || typeof schema !== 'object' || Array.isArray(schema)) {
      return false;
    }
    const { min, max } = schema;
    return queryNumRange(data, min, max);
  },
  error: {
    message: 'is out of range',
  },
};
ajv.addKeyword(queryNumRangeKeyword);
