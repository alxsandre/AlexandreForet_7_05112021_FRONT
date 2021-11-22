import logoIconName from '../../logo_icon_name.png';
import './Header.css';

function Header() {
  return (
    <header>
        <img className="header__logo" src={logoIconName} alt="logo" />
    </header>
  );
}

export default Header;