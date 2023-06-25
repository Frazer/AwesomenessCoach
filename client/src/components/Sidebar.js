import "./Sidebar.css";
import User from "../types/User";
import PropTypes from "prop-types";
import SidebarChatee from "./SidebarChatee";
import SidebarHeader from "./SidebarHeader";
import { useParams } from "react-router-dom";


function Sidebar({ friendList }) {
  // TODO: Get a list of user's friends's id, profile pic url, [last line of conversation]
  const { chateeUserId } = useParams();
  return (
    <div className="sidebar-container">
      <SidebarHeader />
      <div className="sidebar-chatee-list">
        {
          friendList.map((user) => (
            <SidebarChatee user={ user } key={ user.id } isActive={ chateeUserId === user.id } />
          ))
        }
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  friendList: PropTypes.arrayOf(PropTypes.shape(User)),
};

export default Sidebar;