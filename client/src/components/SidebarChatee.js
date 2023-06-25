import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfilePic from "./ProfilePic";
import User from "../types/User";

function SidebarChatee({ user, isActive }) {
  const chateeName = `${user.firstName} ${user.lastName}`;
  const chatUrl = `/${user.id}`;
  return (
    <Link to={ chatUrl } className="nontext-link">
      <div className={ `sidebar-chatee ${isActive ? "active" : ""}` }>
        <ProfilePic url={ user.profileUrl } marginRight="0.5rem" />
        <p>{ chateeName }</p>
      </div>
    </Link>
  );
}

SidebarChatee.propTypes = {
  user: PropTypes.shape(User).isRequired,
  isActive: PropTypes.bool,
};

SidebarChatee.defaultProps = {
  active: false,
};

export default SidebarChatee;