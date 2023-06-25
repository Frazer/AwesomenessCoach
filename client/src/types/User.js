import PropTypes from "prop-types";

const user = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profileUrl: PropTypes.string.isRequired,
};

export default user;