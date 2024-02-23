import React from 'react';

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-indigo-500 rounded p-2 py-1 cursor-pointer">
        {/* Avatar div */}
        <div className="avatar online">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="User profile"
            />
          </div>
        </div>
        {/*  End of Avatar div */}
        {/* Users Name and Emoji */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-purple-100">
              {' '}
              <i>Steezy</i> User
            </p>
            <span className="text-xl">🙂</span>
          </div>
        </div>
        {/* Divider */}
        <div className="divider my-0 py-0 h-1" />
      </div>
    </>
  );
};

export default Conversation;
