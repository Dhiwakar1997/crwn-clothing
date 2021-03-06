import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherPropes }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherPropes} />
    {label ? (
      <label
        className={`${
          otherPropes.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
