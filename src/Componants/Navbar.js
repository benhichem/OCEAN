import "../Styling/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-bar-logo-container">
        <h2>OCEAN</h2>
      </div>
      <div className="nav-bar-links-cotnaiern"></div>
      <div className="nav-bar-signup-login-contianer">
        <h3>
          <span>Sign Up</span> / <span>Sign In</span>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
