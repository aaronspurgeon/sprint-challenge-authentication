/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = () => {
  return async (req, res, next) => {
    if (!req.session || !req.session.user) {
      return res.status(403).json({
        message: "You are not authorized."
      });
    }
    next();
  };
};
