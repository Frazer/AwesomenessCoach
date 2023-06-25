import { sendChatMessage } from "../reducers/chatMessagesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";

const ENTER_KEYS = ["13", "Enter"];

function ChatInputBar({ senderId, receiverId }) {
  const dispatch = useDispatch();
  const [chatTextInput, setChatTextInput] = useState("");

  function sendTextMessage() {
    if (chatTextInput !== "") {
      dispatch(sendChatMessage(senderId, receiverId, "text", chatTextInput));
      setChatTextInput("");
    }
  }

  function onKeyDownHandler({ key }) {
    if (ENTER_KEYS.includes(String(key))) {
      sendTextMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <i className="fas fa-keyboard"></i>
      <input className="chat-text-input"
        placeholder="Aa" value={ chatTextInput }
        onInput={ e => { setChatTextInput(e.target.value); } }
        onKeyDown={ e => onKeyDownHandler(e) }
      ></input>
      <i className={ `fas fa-paper-plane ${chatTextInput === "" ? "" : "clickable"}` } onClick={ () => sendTextMessage() }></i>
    </div>
  );
}

ChatInputBar.propTypes = {
  senderId: PropTypes.string.isRequired,
  receiverId: PropTypes.string.isRequired,
};

export default ChatInputBar;