const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, "meeshoAdmin");
      req.body.userID = decoded.userID;
      next();
    } catch (err) {
      res.status(400).send({ msg: "Please Login First" });
    }
  } else {
    res.status(400).send({ msg: "Please Login First" });
  }
};

module.exports = { adminAuth };
