import React from 'react';
import Conversation from './Conversation';

const Conersations = () => {
  //Each conversation becomes it own component
  //This file just holds the sum off the ConversationSSS
  return (
    <div className="flex py-2 overflow-auto flex-col">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conersations;
