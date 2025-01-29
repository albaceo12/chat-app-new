import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedinuserId = req.user._id;
    const filteredusers = await User.find({
      _id: { $ne: loggedinuserId },
    }).select("-password");
    res.status(200).json(filteredusers);
  } catch (error) {
    console.log("error in getUsersForSidebar", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getMessages", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let imageurl;
    if (image) {
      const uploadres = await cloudinary.uploader.upload(image); // kinda bucket for our images not data base have in mind
      imageurl = uploadres.secure_url;
    }
    const newmessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageurl,
    });
    await newmessage.save();
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newmessage); //send msg to private chatt
    }
    res.status(201).json(newmessage);
  } catch (error) {
    console.log("error in sendMessage", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
