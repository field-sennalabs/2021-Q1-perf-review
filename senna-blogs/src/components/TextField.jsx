import React from "react";
import styled from "styled-components";
import { useField } from "formik";
import hoistNonReactStatics from "hoist-non-react-statics";

function TextField({ className, label, touched, error, ...props }) {
  const showError = touched && error;

  return (
    <div className={className}>
      <label>{label}</label>
      <div className="input-wrapper">
        <input {...props} />
      </div>
      {showError && <div className="error">{error}</div>}
    </div>
  );
}

const StyledTextField = styled(TextField)`
  .input-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e6e6e6;

    input {
      display: block;
      width: 100%;
      height: 40px;
      background: transparent;
      color: #555555;
      line-height: 1.2;
      padding: 0 16px;
      outline: none;
      border: none;
    }
  }

  .error {
    color: red;
  }
`;

function FormikTextField(props) {
  const [field, { error, touched }] = useField(props);

  return (
    <StyledTextField {...props} {...field} error={error} touched={touched} />
  );
}

hoistNonReactStatics(FormikTextField, StyledTextField);

export { FormikTextField as TextField };
