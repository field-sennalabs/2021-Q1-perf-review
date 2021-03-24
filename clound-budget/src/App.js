import "./App.scss";
import Logo from "./assets/Rectangle 3.jpg";
import Cloud from "./assets/Vector.svg";
import Language from "./assets/Language Selection.svg";

function App() {
  return (
    <div className="App">
      <div className="logo-wrapper">
        <div className="overlay" />
        <img className="logo" src={Logo} />
        <header>
          <span>
            <img src={Cloud} />
            CloudBudget
          </span>
          <ul>
            <li>
              <b>OVERVIEW</b>
            </li>
            <li>FEATURES</li>
            <li>TECHNOLOGY</li>
            <li>CONTACT</li>
            <li>Sign up</li>
          </ul>
          <div className="menu">
            <img src={Language} />
            <button className="login-btn">LOGIN</button>
          </div>
        </header>

        <div className="content">
          <div>CloudBudget</div>
          <p>
            Cloud budget management for everyone. Only €69.95 a Month After a 7
            Day Trial of Up to €4.99
          </p>

          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default App;
