import logo from "../assets/images/logo-teal.svg";

const Header = ({ children }) => {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <img src={logo} alt="Deliveroo logo" />
        </div>
      </div>

      {children}
    </header>
  );
};

export default Header;
