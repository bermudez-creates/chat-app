import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    console.log('in use effect');
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 px-4 overflow-auto">
      {/* messages exist */}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
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
