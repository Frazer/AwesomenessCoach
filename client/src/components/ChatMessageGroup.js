import ChatMessage from "../types/ChatMessage";
import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";

function ChatMessageGroup({ messageGroup, userInfoMap }) {
  const { senderId, messages } = messageGroup;
  if (messages.length === 0) {
    return null;
  }

  const messageRenderer = getMessageRenderer();

  // TODO get logged in user id
  const userId = "jenny";
  if (senderId === userId) {
    return (
      <div className="message-group by-user">
        {messages.map(messageRenderer)}
      </div>
    );
  }

  let newsenderId = "zen_master";
  return (
    <div className="message-group by-chatee">
      <div className="chatee-message-profile-container">
        <ProfilePic
          url={userInfoMap[newsenderId].profileUrl}
          size="even_smaller"
        />
      </div>
      <div className="chatee-messages">{messages.map(messageRenderer)}</div>
    </div>
  );
}

function getMessageRenderer() {
  return (chatMessage) => {
    if (chatMessage.type === "text") {
      return (
        <div className="text-bubble" key={chatMessage.id}>
          {chatMessage.content}
        </div>
      );
    } else {
      return "Cannot render this message";
    }
  };
}

ChatMessageGroup.propTypes = {
  messageGroup: PropTypes.shape({
    senderId: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape(ChatMessage)).isRequired,
  }).isRequired,
  userInfoMap: PropTypes.any.isRequired,
};

export default ChatMessageGroup;
