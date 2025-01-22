export const FORM_RULE_MESSAGE = {
  REQUIRED: {
    required: 'GLOBAL.FORM_ELEMENTS.ERRORS.REQUIRED.DEFAULT',
  },
  TCKN: {
    required: 'GLOBAL.FORM_ELEMENTS.ERRORS.LIMITATIONS.TCKN',
    minLength: 'GLOBAL.FORM_ELEMENTS.ERRORS.LIMITATIONS.TCKN',
  },
  PHONE: {
    required: 'GLOBAL.FORM_ELEMENTS.ERRORS.LIMITATIONS.PHONE',
    minLength: 'GLOBAL.FORM_ELEMENTS.ERRORS.LIMITATIONS.PHONE',
    pattern: 'GLOBAL.FORM_ELEMENTS.ERRORS.LIMITATIONS.PHONE',
    validate: 'GLOBAL.FORM_ELEMENTS.ERRORS.LIMITATIONS.PHONE',
  },
};
