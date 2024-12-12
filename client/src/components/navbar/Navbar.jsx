import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { userData } from "../../lib/dummyData"; //Dummy data

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

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
          {user ? (
            //If user is logged in - show the profile options
            <div className="user">
              <img src={userData.img} alt="" />
              <span>John Doe</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            //If not logged in, show sign in/up options
            <>
              <a href="">Sign In</a>
              <a href="" className="register">
                Sign Up
              </a>{" "}
            </>
          )}
          <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
          </div>

          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
