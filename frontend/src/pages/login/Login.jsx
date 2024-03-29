import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-p6 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-800 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10">
        <h1 className="text-3x1 font-semibold text-center text-purple-100">
          Welcome to
          <span className="text-purple-500">
            {' '}
            <i>Steezy</i>Chat
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                <i>enter a username</i>
              </span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                <i>enter a password</i>
              </span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to={'/signup'}
            className="text-sm hover:underline hover:text-indigo-800 mt-2 inline-block  text-gray-200"
          >
            Don't have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btm-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
