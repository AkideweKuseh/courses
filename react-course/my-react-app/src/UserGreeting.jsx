/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome back, {props.username}!</h2>
  );

  const signupPrompt = <h2 className="signup-prompt">Please sign up.</h2>;

  return props.isLoggedIn ? welcomeMessage : signupPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
