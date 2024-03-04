import React from 'react';
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-indigo-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? 'bg-indigo-400' : ''
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* Avatar div */}
        {/* flex gap-2 items-center hover:bg-indigo-500 rounded p-2 py-1 cursor-pointer */}
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
