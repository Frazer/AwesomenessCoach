import { Fragment } from "react";
import temp_profile_pic from "../static/temp_profile1.jpg";
import ProfilePic from "./ProfilePic";

function SidebarHeader() {
  // TODO: Get user's profile picture
  return (
    <Fragment>
      <div className="sidebar-header">
        <ProfilePic url={ temp_profile_pic } marginRight="0.6rem" size="small" />
        <h2>CloverChat</h2>
        <div className="header-icon-container">
          <i className="action-btn-icon fas fa-user-plus"></i>
        </div>
      </div >
      <hr className="sidebar-hr" />
    </Fragment>
  );
}

export default SidebarHeader;