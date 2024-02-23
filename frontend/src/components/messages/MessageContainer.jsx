import React from 'react';
import Messages from './Messages';

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/* HEADER */}
        <div className="bg-slate-500 px-4 py-4 mb-2">
          <span className="label-text">Message to: </span>
          <span className="text-indigo-800 font-bold">
            <i>Steezy </i>User
          </span>
        </div>

        <Messages />
      </>
    </div>
  );
};

export default MessageContainer;
