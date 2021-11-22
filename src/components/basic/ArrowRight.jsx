import './ArrowRight.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ArrowRight() {
  return (
      <FontAwesomeIcon icon={faArrowRight} className="arrow__right"></FontAwesomeIcon>
  );
}

export default ArrowRight;