import { emailRegex } from '@/constants/regexConstants';
import { isValidPhoneNumber } from 'react-phone-number-input';

export const FORM_RULE = {
  REQUIRED: {
    required: true,
  },
  OPTIONAL: {
    required: false,
  },
  TCKN: {
    REQUIRED: {
      required: true,
      minLength: 11,
    },
  },
  PHONE: {
    REQUIRED: {
      required: true,
      validate: (value: string) => isValidPhoneNumber(value),
    },
  },
};
