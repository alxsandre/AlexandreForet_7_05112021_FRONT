import logoIconName from '../../logo_icon_name.png';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('user');
    navigate(`/`);
  }

  return (
    <header className="header header--main">
        <img className="header__logo" src={logoIconName} alt="logo" />
        <ul className="header__nav">
          <li><Link to="/wall">Wall</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><button onClick={logOut} className="button button--header">Sign out<FontAwesomeIcon icon={faSignOutAlt} className="header__poweroff"> </FontAwesomeIcon></button></li>
        </ul>
    </header>
  );
}

function HeaderWelcome() {
  
  return (
    <header className="header header--welcome">
        <img className="header__logo" src={logoIconName} alt="logo" />
    </header>
  );
}

export default Header;

export {
  HeaderWelcome
}
