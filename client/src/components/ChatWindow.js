import "./ChatWindow.css";
import User from "../types/User";
import PropTypes from "prop-types";
import ChatWindowHeader from "./ChatWindowHeader";
import ChatContent from "./ChatContent";
import ChatInputBar from "./ChatInputBar";
import { useSelector } from "react-redux";

import temp_profile1 from "../static/temp_profile1.jpg";
import temp_profile2 from "../static/temp_profile2.jpg";
import temp_profile3 from "../static/temp_profile3.jpg";
import temp_profile4 from "../static/temp_profile4.jpg";
import temp_profile5 from "../static/temp_profile5.jpg";

function ChatWindow({ chatee }) {
  const chatHistory = useSelector((state) => state.chatMessages);
  const userId = "jenny"; // TODO get user id
  const userInfoMap = {
    zen_master: {
      profileUrl: temp_profile2,
    },
    jenny: {
      profileUrl: temp_profile1,
    },
    super_hero: {
      profileUrl: temp_profile3,
    },
    elon_musk: {
      profileUrl: temp_profile4,
    },
    mahatma_gandhi: {
      profileUrl: temp_profile5,
    },
  };
  return (
    <div className="chatwindow-container">
      <ChatWindowHeader chatee={chatee} />
      <ChatContent chatHistory={chatHistory} userInfoMap={userInfoMap} />
      <ChatInputBar senderId={userId} receiverId={chatee.id} />
    </div>
  );
}

ChatWindow.propTypes = {
  chatee: PropTypes.shape(User),
};

export default ChatWindow;
