const {
  DESIRED_REFERENCE_MAX_AGE,
  DESIRED_REFERENCE_KEY,
} = require('../../config/session');

const saveDesiredReferenceInCookie = (req, res) => {
  res.cookie(DESIRED_REFERENCE_KEY, req.originalUrl, {
    maxAge: DESIRED_REFERENCE_MAX_AGE,
  });
};

module.exports = { saveDesiredReferenceInCookie };
