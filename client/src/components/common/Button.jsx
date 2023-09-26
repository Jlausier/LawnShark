import PropTypes from "prop-types";

export default function Button({ title, ...props }) {
  return (
    <button className="buttonMaster" {...props}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};
