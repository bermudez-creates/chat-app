import React from 'react';

const Message = () => {
  return (
    // User signed in chat
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>

      <div className="chat-header text-indigo-900">
        Anakin
        <time className="text-xs opacity-50 text-purple-900 font-semibold">
          {' '}
          12:46
        </time>
      </div>
      <div className="chat-bubble text-purple-100">I hate you!</div>
      <div className="chat-footer opacity-50 text-purple-900">
        Seen at 12:46
      </div>
    </div>
  );
};

export default Message;
