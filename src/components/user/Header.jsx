import logoIcon from '../../logo_icon.png';
import logoName from '../../logo_name.png';
import './Header.css';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header className="l-header">
      <img className="logoicon" src={logoIcon} alt="logo" />
      <h1>
        <span className="header__theme"> {props.theme} </span>
        <img className="logoname" src={logoName} alt="nom de l'entreprise" />
      </h1>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string
}

export default Header;
