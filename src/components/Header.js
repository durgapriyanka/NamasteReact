import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setbtnName] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Cart</li>
            <button class="btnName" onClick={() => btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;