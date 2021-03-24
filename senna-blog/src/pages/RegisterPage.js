import { Formik, Form, Field } from "formik";
import styled from "styled-components";

import { useAuthen } from "../hooks/useAuthen";

function RegisterPage({ className }) {
  const { register } = useAuthen();
  function onSubmit(form) {
    register(form);
  }

  return (
    <div className={className}>
      <h1>
        <b>Register</b>
      </h1>
      <Formik
        initialValues={{
          name: "",
          username: "",
          password: "",
        }}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <label>Name</label>
            <Field type="text" name="name" placeholder="enter name" />
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

const RegisterPageStyled = styled(RegisterPage)`
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

export default RegisterPageStyled;
