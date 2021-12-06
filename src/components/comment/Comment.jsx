import './Comment.scss';
import { useFetch } from '../../utils/hooks/useFetch';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SendComment from './SendComment';


function Comment(props) {
    const userAuthentification = localStorage.getItem('user');
    const bearer = JSON.parse(userAuthentification).token;
    const { data, isLoading } = useFetch(`http://localhost:3000/api/comment/${props.postId}`, bearer, userAuthentification)

 
    
    if (!isLoading) {
        return (Object.keys(data).reverse().map((keyComment, i) => (
            <article className="comment" key={i}>
                <div className="comment__background"></div>
                <div className="comment__container">
                    <div className="comment__head">
                    <button className="comment__button" onClick={() => props.updateCommentShown(false)}>
                        <FontAwesomeIcon icon={faTimes} className="comment__cross"></FontAwesomeIcon>
                    </button>
                    </div>
                    <div className="comment__content">
                        <img className="comment__image" src="http://localhost:3000/images/ninja-cat-avatar.png" alt="avatar" />
                        <div className="comment__wrapper">
                            <h2 className="comment__text">{data[keyComment].employee.first_name} {data[keyComment].employee.last_name}</h2>
                            <p className="comment__text">{data[keyComment].content}</p>
                        </div>
                    </div>
                    <SendComment postId={props.postId}/>
                </div>
            </article>
        )))
    }
    return null
}

Comment.propTypes = { postId: PropTypes.number, updateCommentShown: PropTypes.func }

export default Comment;