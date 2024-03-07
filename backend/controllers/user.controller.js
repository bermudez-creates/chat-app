import User from '../models/user.model.js';

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    // Find every user in DB but the one (not equal / $ne) to the loggedn in user id
    // on a sidebar we want to see other users not ourselves
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select('-password');

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error('Error is get users for sidebar controller', error.message);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
