import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../helper";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="my-4 flex gap-3">
      <img className="h-12" src="user.png" alt="image" />
      <div>
        <p className="font-bold">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.chatMessage);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling here
      //console.log("testing")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Hii, how are you. 🚀",
        })
      );
    }, 30000);

    return () => clearInterval(i); // clearing the interval
  }, []);

  return (
    <div className="my-5 p-3 lg:w-[800px] lg:h-[800px] bg-black border-2 border-gray-600 rounded-2xl overflow-y-scroll flex flex-col-reverse">
      {/* <p className="font-bold text-xl">Live Chat</p> */}

      {chatMessages.map((msg, index) => {
        return (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        );
      })}
    </div>
  );
};

export default LiveChat;
