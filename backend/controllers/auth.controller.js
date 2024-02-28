import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import generateTokenAndSaveCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
  console.log('Signing new user up...');
  try {
    //inputs
    const { fullName, username, password, confirmPassword, gender } = req.body;
    //check pass
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match.' });
    }
    // check if user exist
    const user = await User.findOne({ username });
    // if exist return error
    // if not create one
    if (user) {
      return res.json(401).json({ error: 'Username already exists.' });
    }

    //HASH PASSWORD ---
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    });

    // checks if user is new
    if (newUser) {
      //saves new user to DB
      generateTokenAndSaveCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: 'Invalid user data.' });
    }
  } catch (error) {
    console.log(`Error in sign up controller`, error);
    res.status(501).json({ error: 'Internal server error.' });
  }
};

export const login = async (req, res) => {
  console.log('Logging user in...');
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ''
    );

    if (!user || !isPasswordCorrect) {
      res.status(402).json({ error: 'Invalid username or password' });
    }

    if (user && isPasswordCorrect) {
      generateTokenAndSaveCookie(user._id, res);

      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
      });
    }
  } catch (error) {
    console.log(`Error in login controller`, error.message);
    res.status(502).json({ error: 'Internal server error' });
  }
};

export const logout = (req, res) => {
  console.log('Logging user out...');
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.log(`Error in the logout controller`, error.message);
    res.status(501).json({ error: 'Internal server errror' });
  }
};
