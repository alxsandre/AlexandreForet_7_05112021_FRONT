import './Button.css';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


function Button(props) {
  let navigate = useNavigate();

  return (
    <button onClick={() => {
      navigate(props.nav);
    }}
    className="button" type="submit">
      {props.content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.node,
  ]),
  nav: PropTypes.string
}


export default Button;
