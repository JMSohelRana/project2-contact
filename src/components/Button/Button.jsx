/* eslint-disable react/prop-types */
import "./Button.css";
const Button = (props) => {
  const { icon, text } = props;
  return (
    <div className="primary-btn">
      {icon}
      {text}
    </div>
  );
};

export default Button;
