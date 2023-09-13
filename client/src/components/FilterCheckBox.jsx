import PropTypes from "prop-types";

export default function FilterCheckBox({ title, value }) {
  return (
    <div className="form-check pe-4">
    <input className="form-check-input" type="checkbox" value="{value}" />
    <label className="form-check-label" for="flexCheckDefault">
      {title}
    </label>
  </div>
  );
}

FilterCheckBox.propTypes = {
  title: PropTypes.string,
};