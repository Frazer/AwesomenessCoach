import PropTypes from "prop-types";

const sizeChart = {
  big: "50px",
  medium: "40px",
  small: "36px",
  even_smaller: "28px",
};

function ProfilePic(props) {
  /**
   * Rounded and centered profile picture
   */
  const profilePicStyle = {
    backgroundImage: `url(${props.url})`,
    marginRight: props.marginRight,
    width: sizeChart[props.size],
    height: sizeChart[props.size],
  };
  return <div className="profile-pic" style={ profilePicStyle } />;
}

ProfilePic.propTypes = {
  url: PropTypes.string.isRequired,
  marginRight: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeChart)),
};

ProfilePic.defaultProps = {
  size: "big",
};

export default ProfilePic;