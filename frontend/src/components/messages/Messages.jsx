import React from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log(`Messages ---`, messages);
  return (
    <div className="flex-1 px-4 overflow-auto">
      {/* messages exist */}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => <Message key={idx} message={message} />)}
      {/* loading state */}
      {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {/* no messages */}
      {!loading && messages.length === 0 && (
        <p className="text-center text-indigo-400">
          Send a message to start a conversation.
        </p>
      )}
    </div>
  );
};

export default Messages;
