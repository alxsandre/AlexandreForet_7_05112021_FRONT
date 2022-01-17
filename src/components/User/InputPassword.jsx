import './Input.css';
import PropTypes from 'prop-types';

function Input(props) {
  let labelNoSpace;
  if (props.label.indexOf(' ') >= 0) {
    labelNoSpace = props.label.replace(' ', '_');
  }

  return (
    <div className="field">
        <label htmlFor={labelNoSpace || props.label} className="field__label">{props.extraLabel}{props.label}:</label>
        <input pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" title="the password must contain: at least 8 characters, 1 uppercase, 1 lowercase, 1 number" type={labelNoSpace || props.label} id={labelNoSpace || props.label} onChange={props.handleChange} minLength="8" className="field__input" name={labelNoSpace || props.label} required />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  extraLabel: PropTypes.string,
  handleChange: PropTypes.func
}

export default Input;
