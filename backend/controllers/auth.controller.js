import User from '../models/user.model.js';

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match.' });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.json(401).json({ error: 'Username already exists.' });
    }

    //HASH PASSWORD ---
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    });

    //saves new user to DB
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log(`Error in sign up controller`, error);
    res.status(501).json({ error: 'Internal server error.' });
  }
};

export const login = (req, res) => {
  console.log(`User`);
  res.send('User');
};

export const logout = (req, res) => {
  console.log('Logging out....');
  res.send('Log out');
};
