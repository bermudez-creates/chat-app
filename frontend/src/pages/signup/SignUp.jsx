import React from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox.jsx';
import { useState } from 'react';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3x1 font-semibold text-center  text-purple-100">
          Sign up @{' '}
          <span className="text-purple-500">
            <i>Steezy</i>Chat
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Sign up FullName */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-purple-100">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your full government name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          {/* Sign up UserName */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-purple-100">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter a steezy username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          {/* Sign up Password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-purple-100">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter a secure password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          {/* Sign up ConfirmPassword */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-purple-100">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your secure password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          {/* GENDER CHECK BOX */}
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to={'/login'}
            className="text-sm hover:underline hover:text-indigo-800 mt-2 inline-block  text-purple-100"
          >
            Are you a cool guy with an account? (Login)
          </Link>

          <div>
            <button className="btn btn-block btm-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
          {/* End of sign up form */}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
