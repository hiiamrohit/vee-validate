import { ValidationRuleFunction } from '@vee-validate/shared';
import { getSingleParam } from './utils';

const digitsValidator: ValidationRuleFunction = (value: any, params): boolean => {
  const length = getSingleParam(params, 'length');
  if (Array.isArray(value)) {
    return value.every(val => digitsValidator(val, { length }));
  }
  const strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === length;
};

export default digitsValidator;
