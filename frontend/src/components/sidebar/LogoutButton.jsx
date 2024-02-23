import React from 'react';
import { GrLogout } from 'react-icons/gr';

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <GrLogout className="w-5 h-6 cursor-pointer text-purple-800" />
    </div>
  );
};

export default LogoutButton;
