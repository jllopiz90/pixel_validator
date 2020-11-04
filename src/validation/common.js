export const validateStringExists = (value) => !!value && typeof value === 'string' && value.length > 0;

export const validationPayload = (valid, message) => ({ valid, message });