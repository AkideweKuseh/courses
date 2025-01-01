/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is present: {props.isPresent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isPresent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isPresent: false,
};
export default Student;
