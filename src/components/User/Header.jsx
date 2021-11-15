import logoIcon from '../../logo_icon.png';
import logoName from '../../logo_name.png';
import './Header.css';

function Header(props) {
  return (
    <header>
      <img className="logoicon" src={logoIcon} alt="logo" />
      <h1>
        <span className="header__theme"> {props.theme} </span>
        <img className="logoname" src={logoName} alt="nom de l'entreprise" />
      </h1>
    </header>
  );
}

export default Header;
