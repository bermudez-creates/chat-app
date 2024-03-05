import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedDate = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleChatColor = fromMe ? 'bg-indigo-700' : 'bg-slate-600';
  return (
    // User signed in chat
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>

      <div className="chat-header text-indigo-900">
        <i>SteezyUser</i>{' '}
      </div>
      <div className={`chat-bubble text-purple-100 ${bubbleChatColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-purple-900">
        {formattedDate}
      </div>
    </div>
  );
};

export default Message;
