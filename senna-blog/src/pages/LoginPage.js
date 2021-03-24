import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";

import useAuthen from "../hooks/useAuthen";

function LoginPage({ className }) {
  const { login, getToken } = useAuthen();
  const history = useHistory();
  const token = getToken();

  function onSubmit(form) {
    login(form);
  }

  console.log(token);

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);

  return (
    <div className={className}>
      <h1>
        <b>Login</b>
      </h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <label>Username</label>
            <Field type="text" name="username" placeholder="enter username" />
            <label>Password</label>
            <Field
              type="password"
              name="password"
              placeholder="enter password"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const LoginPageStyled = styled(LoginPage)`
  form {
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin-top: 10px;
    }

    button {
      margin-top: 20px;
    }
  }
`;

export default LoginPageStyled;
