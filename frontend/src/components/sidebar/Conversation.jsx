import React from 'react';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-indigo-500 rounded p-2 py-1 cursor-pointer">
        {/* Avatar div */}
        <div className="avatar online">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={conversation.profilePic} alt="User profile" />
          </div>
        </div>
        {/*  End of Avatar div */}
        {/* Users Name and Emoji */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-purple-100">
              {' '}
              <i>{conversation.fullName}</i>
            </p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
