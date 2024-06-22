import "./navbar.scss";

export default function Navbar() {
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
        </div>
      </nav>
    </div>
  );
}
