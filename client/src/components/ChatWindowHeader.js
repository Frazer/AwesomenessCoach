import User from "../types/User";
import ProfilePic from "./ProfilePic";
import PropTypes from "prop-types";

function ChatWindowHeader({ chatee }) {
  return (
    <div className="chatwindow-header">
      <ProfilePic url={ chatee.profileUrl } marginRight="0.5rem" size="medium" />
      <b>{ chatee.firstName } { chatee.lastName }</b>
      <div className="header-icon-container">
        <i className="fas fa-palette clickable"></i>
      </div>
    </div>
  );
}


ChatWindowHeader.propTypes = {
  chatee: PropTypes.shape(User),
};

export default ChatWindowHeader;