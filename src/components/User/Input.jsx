import './Input.css';

function Input(props) {
  return (
    <li className="field">
        <label htmlFor={props.label} className="field__label">{props.label}:</label>
        <input type={props.label} id={props.label} onChange={props.handleChange} className="field__input" name={props.label} required />
    </li>
  );
}

export default Input;
