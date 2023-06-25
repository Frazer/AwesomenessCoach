import PropTypes from "prop-types";

const chatMessage = {
  id: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  senderId: PropTypes.string.isRequired,
  receiverId: PropTypes.string,
  type: PropTypes.oneOf(["text"]).isRequired,
  content: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export default chatMessage;