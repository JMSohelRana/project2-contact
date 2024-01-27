import logo from "/images/contact.png";
import "../components/css/Navigation.css";

const Navigation = () => {
  return (
    <nav className=" container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
