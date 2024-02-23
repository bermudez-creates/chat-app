import React from 'react';
import GenderCheckbox from './GenderCheckbox.jsx';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3x1 font-semibold text-center  text-purple-100">
          Sign up @{' '}
          <span className="text-purple-500">
            <i>Steezy</i>Chat
          </span>
        </h1>

        <form>
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
            />
          </div>
          {/* GENDER CHECK BOX */}
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-indigo-800 mt-2 inline-block  text-purple-100"
          >
            Are you a cool guy with an account?
          </a>

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
