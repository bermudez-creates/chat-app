import React from 'react';
import { GrLogout } from 'react-icons/gr';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      <GrLogout
        className="w-5 h-6 cursor-pointer text-purple-800"
        onClick={logout}
      />
    </div>
  );
};

export default LogoutButton;
