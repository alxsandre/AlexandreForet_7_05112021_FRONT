import './Input.css';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <li className="field">
        <label htmlFor={props.label} className="field__label">{props.label}:</label>
        <input type={props.label} id={props.label} onChange={props.handleChange} className="field__input" name={props.label} required />
    </li>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func
}

export default Input;
