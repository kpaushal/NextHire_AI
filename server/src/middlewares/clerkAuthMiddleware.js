const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

const isClerkConfigured = Boolean(process.env.CLERK_SECRET_KEY);

const requireAuth = isClerkConfigured
  ? ClerkExpressRequireAuth()
  : (req, _res, next) => {
      req.auth = { userId: req.headers['x-dev-user-id'] || 'local-dev-user' };
      next();
    };

module.exports = { requireAuth };
