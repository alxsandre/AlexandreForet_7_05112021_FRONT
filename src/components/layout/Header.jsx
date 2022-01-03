import logoIconName from '../../logo_icon_name.png';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={logoIconName} alt="logo" />
        <ul className="header__nav">
          <li><Link to="/wall">Wall</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><button className="button button--header">Sign out<FontAwesomeIcon icon={faSignOutAlt} className="header__poweroff"> </FontAwesomeIcon></button></li>
        </ul>
    </header>
  );
}

export default Header;