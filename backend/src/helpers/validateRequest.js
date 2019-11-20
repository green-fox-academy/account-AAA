const validateContentType = require('./validateContentType');
const validateAccountName = require('./validateAccountName');
const validateMissingKeys = require('./validateMissingKeys');

module.exports = async function validateRequest(req) {
  // validate header content type
  if (validateContentType(req)) {
    return {
      code: 415,
      message: 'Content-type must be application/json.',
    };
  }

  // validate missing value
  const missingKeys = validateMissingKeys();
  if (missingKeys.length !== 0) {
    return {
      code: 400,
      message: `Missing ${missingKeys}.`,
    };
  }

  // unique account name
  const { depositName, userId } = req.body;
  try {
    const accountNameIsUnique = await validateAccountName(userId, depositName);
    return accountNameIsUnique
      ? { code: 200 }
      : {
        code: 422,
        message: 'Deposit name is taken',
      };
  } catch (error) {
    return {
      code: 500,
      message: 'Something went wrong, please try again later.',
    };
  }
};
