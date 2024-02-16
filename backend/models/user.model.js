import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    profilePic: {
      type: String,
      default: '',
    },
  },

  //able to create function to display users sign up date 'Member since 99'
  { timestamps: true }
);

//Model based off schema ^
//Now able to use this model in other files

const User = mongoose.model('User', userSchema);

export default User;
