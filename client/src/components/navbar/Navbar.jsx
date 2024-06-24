import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="left">
          <a className="logo" href="/">
            <img src="/" alt="" />
            <span>PropertPro</span>
          </a>

          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>

        <div className="right">
          <a href="">Sign In</a>
          <a href="" className="register">
            Sign Up
          </a>
          <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
          </div>

          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="">Sign In</a>
            <a href="" className="register">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
