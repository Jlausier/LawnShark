import PropTypes from "prop-types";

import { createServiceStub } from "../utils/dataValidation";

export default function ServiceRadioButton({
  name,
  _id,
  activeId,
  handleChange,
}) {
  const serviceStub = createServiceStub(name);
  return (
    <div className="form-check">
      <input
        type="radio"
        id={serviceStub}
        name="service"
        value={_id}
        checked={activeId === _id}
        onChange={handleChange}
        className="form-check-input"
      />
      <label htmlFor={serviceStub} className="form-check-label">
        {name}
      </label>
    </div>
  );
}

ServiceRadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  activeId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
