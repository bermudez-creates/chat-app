import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';

export const sendMessage = async (req, res) => {
  console.log('Sending message...');
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

    // TODO: socket IO functionality

    // await conversation.save();
    // await newMessage.save();

    //optimize to run ||
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      //used to send message to specific client
      io.to(receiverSocketId).emit('newMessage', newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log('Error in send message controller', error.message);
    res.status(501).json({ error: 'Internal server error.' });
  }
};

export const getMessages = async (req, res) => {
  console.log('Getting message...');
  try {
    // User 2 we are chatting with
    const { id: userToChatId } = req.params;
    // User currently logged in
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages');

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log('Error in get messages controller', error.message);
    res.status(501).json({ error: 'Internal server error.' });
  }
};
