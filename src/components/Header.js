import logo from "../image/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Mesto" />
    </header>
  );
}

export default Header;
