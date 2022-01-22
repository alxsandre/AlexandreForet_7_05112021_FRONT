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
        <input type={labelNoSpace || props.label} id={labelNoSpace || props.label} onChange={props.handleChange} className="field__input" name={labelNoSpace || props.label} required />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  extraLabel: PropTypes.string,
  handleChange: PropTypes.func
}

export default Input;
