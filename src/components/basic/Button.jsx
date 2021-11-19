import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import colors from '../../utils/colors';

const ButtonNext = styled.button`
  border: .0625rem solid #FFD7D7;
  border-radius: .4375rem;
  background-color: ${colors.black};
  height: 2.375rem;
  margin: 3.5rem 2.5rem;
  left: calc(50% - 2.5rem);
  width: calc(50% - 2.5rem);
  position: relative;
  `

function Button() {
  return (
    <ButtonNext type="submit">
        <FontAwesomeIcon icon={faArrowRight} className="arrowright"></FontAwesomeIcon>
    </ButtonNext>
  );
}

export default Button;
