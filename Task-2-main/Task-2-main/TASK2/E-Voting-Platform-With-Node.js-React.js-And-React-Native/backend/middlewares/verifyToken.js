const justAuthenticate = isAuthenticated = (req, res, next) => {
    if ('authorization' in req.headers) {
      try {
        const token = req.headers.authorization.match(/Bearer\s+(\S+)/)[1];
        req.token = token;
        return next();
      } catch (err) {
        console.error(err);
        res.status(403).json({ error: "Invalid token" });
      }
    } else {
      res.status(403).json({ error: "You're Not Authorized, As You're Not Logged In..." });
    }
  };
  
  module.exports = justAuthenticate;