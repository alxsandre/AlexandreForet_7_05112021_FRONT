//import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
//import { colors } from '../../utils/colors';

const colors = {
    black: '#000000',
    white: '#FFFFFF',
};

const ButtonNext = styled.button`
  border: .0625rem solid ${colors.white};
  border-radius: .4375rem;
  background-color: ${colors.black};
  `

function Button() {
  console.log(colors)
  return (
    <ButtonNext>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    </ButtonNext>
  );
}

export default Button;
