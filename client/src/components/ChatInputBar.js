import { sendChatMessage } from "../reducers/chatMessagesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ENTER_KEYS = ["13", "Enter"];

function ChatInputBar({ senderId, receiverId }) {
  const dispatch = useDispatch();
  const [chatTextInput, setChatTextInput] = useState("");

  function sendTextMessage() {
    if (chatTextInput !== "") {
      sendMessage();
      dispatch(sendChatMessage(senderId, receiverId, "text", chatTextInput));
      setChatTextInput("");
    }
  }

  const sendMessage = () => {
    // eslint-disable-next-line no-undef
    const serverUrl = window.AwesomeCoach.CHAT_SERVER_URL;
    axios
      .post(`${serverUrl}/generate-text`, { message: chatTextInput })
      .then((response) => {
        // Handle the successful response
        console.log(response.data.text);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  function onKeyDownHandler({ key }) {
    if (ENTER_KEYS.includes(String(key))) {
      sendTextMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <i className="fas fa-keyboard"></i>
      <input
        className="chat-text-input"
        placeholder="Aa"
        value={chatTextInput}
        onInput={(e) => {
          setChatTextInput(e.target.value);
        }}
        onKeyDown={(e) => onKeyDownHandler(e)}
      ></input>
      <i
        className={`fas fa-paper-plane ${
          chatTextInput === "" ? "" : "clickable"
        }`}
        onClick={() => sendTextMessage()}
      ></i>
    </div>
  );
}

ChatInputBar.propTypes = {
  senderId: PropTypes.string.isRequired,
  receiverId: PropTypes.string.isRequired,
};

export default ChatInputBar;
