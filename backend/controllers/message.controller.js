import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
  try {
    //get message from user as input
    const { message } = req.body;
    //id of user message sent to
    const { id: receiverId } = req.params;
    //Get sender ID (user signed in / currently auth user)
    const senderId = req.user._id;

    //looking for existing convo. between these two users
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    //if no convo. create one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    //creating new message object/array
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await conversation.save();
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.log('Error in send message controller', error.message);
    res.status(501).json({ error: 'Internal server error.' });
  }
};
