import PropTypes from "prop-types";

import { createNameStub } from "../../utils/dataValidation";

export default function RadioButton({
  name,
  value,
  activeValue,
  handleChange,
}) {
  const nameStub = createNameStub(value);
  return (
    <div className="form-check">
      <input
        type="radio"
        id={nameStub}
        name={name}
        value={value}
        checked={activeValue === value}
        onChange={handleChange}
        className="form-check-input"
      />
      <label htmlFor={nameStub} className="form-check-label">
        {value}
      </label>
    </div>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  activeValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
