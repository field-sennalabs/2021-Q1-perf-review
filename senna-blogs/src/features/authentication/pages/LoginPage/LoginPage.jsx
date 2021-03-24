import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";

import { TextField } from "../../../../components/TextField";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required()
});

function LoginPage({
  className,
  initialValues = {
    name: "",
    username: "",
    password: ""
  },
  onSubmit
}) {
  return (
    <div className={className}>
      <div className="header">
        <h1>Login</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <>
            <div className="form-wrapper">
              <TextField label="name" name="name" required />
              <TextField label="usename" name="username" required />
              <TextField
                label="password"
                name="password"
                type="password"
                required
              />
            </div>
            <div className="footer">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

const StyledLoginPage = styled(LoginPage)`
  .header {
    text-align: center;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .footer {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
`;

export { StyledLoginPage as LoginPage };
