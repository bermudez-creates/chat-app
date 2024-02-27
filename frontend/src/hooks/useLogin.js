import { useState } from 'react';
import { toast } from 'react-hot-toast';

const useLogin = () => {
  const login = async ({ username, password }) => {
    console.log(username, password);
    // const success = handleInputErrors({
    //   username,
    //   password,
    // });
    // console.log(username, password);

    // if (!success) return;

    //loading state
    // try {
    //   const res = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       username,
    //       password,
    //     }),
    //   });

    //   const data = await res.json();
    //   console.log(data);
    // } catch (error) {
    //   toast.error(error.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return { login };
};

export default useLogin;
