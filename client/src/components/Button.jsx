import PropTypes from "prop-types";
import { buttonClasslist } from "../utils/commonClasslist";

export default function Button({ title, ...props }) {
  return (
    <button className={buttonClasslist} {...props} >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};
