import React, { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import registerApi from "../src/api/register";
import loginApi from "../src/api/authentication";
import Blogs from "../src/features/Blogs";
import "./App.css";

const Home = () => <div>Senna Blogs</div>;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitValue = () => {
    const data = {
      username,
      password,
    };
    console.log(data);
    const isAuth = loginApi.login(data);

    if (isAuth) {
      history.push("/blogs");
    }
  };
  return (
    <div className="login">
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="control">
        <button onClick={submitValue} className="button is-link">
          Submit
        </button>
      </div>
    </div>
  );
}

function Register() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => registerApi.register(data);

  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Name"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input
            name="username"
            className="input"
            type="text"
            placeholder="Username"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <div className="my-app">
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <h1>Senna Blogs</h1>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/register" className="navbar-item">
                  Register
                </Link>
                <Link to="/login" className="navbar-item">
                  Login
                </Link>
                <Link to="/blogs" className="navbar-item">
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/blogs" component={Blogs} />
        </div>
      </div>
    </div>
  );
}
export default App;
