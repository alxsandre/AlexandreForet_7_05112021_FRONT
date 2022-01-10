import './Button.css';
import PropTypes from 'prop-types';
//import { useNavigate } from "react-router-dom";


function Button(props) {
  //let navigate = useNavigate();

  return (
    <button 
    type="submit"
    className="button"
    aria-label={props.ariaLabel}>
      {props.content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.node,
  ]),
  nav: PropTypes.string,
  ariaLabel: PropTypes.string,
}


export default Button;
