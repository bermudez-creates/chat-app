import React from 'react';
import MessageInput from './MessageInput';
import Messages from './Messages';
import { BiSolidMessageSquareAdd } from 'react-icons/bi';
import useConversation from '../../zustand/useConversation';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //clears conversations
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* HEADER */}
          <div className="bg-slate-500 px-4 py-4 mb-2">
            <span className="label-text">TO: </span>
            <span className="text-indigo-800 font-bold">
              <i> {selectedConversation.fullName} </i>
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-indigo-600 font-semibold flex flex-col items-center gap-2">
        <p>
          Welcome <i>{authUser.fullName}</i> 👋🏻 !
        </p>
        <p>Select a chat to start or continue a conversation.</p>
        <BiSolidMessageSquareAdd className="text-3xl  md:text-6xl text-center text-green-800" />
      </div>
    </div>
  );
};
