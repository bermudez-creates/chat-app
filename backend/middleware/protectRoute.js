import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
  try {
    //how we get cookie/token
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: 'Unauthorized access - No token provided' });
    }

    //if token exist we verify it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: 'Unauthorized access - Invalid token' });
    }

    //if verified and true we get the userId
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    } else if (user) {
      //user in our database
      req.user = user;
    }

    next();
  } catch (error) {
    console.log('Error in protectRoute middleware.', error.message);
    res.status(502).json({ error: 'Internal server error.' });
  }
};

export default protectRoute;
