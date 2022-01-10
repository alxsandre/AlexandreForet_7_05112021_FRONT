import './Comment.scss';
import { useFetch } from '../../utils/hooks/useFetch';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SendComment from './SendComment';
import { useState } from 'react';

function Comment(props) {
    const userAuthentification = localStorage.getItem('user');
    const bearer = JSON.parse(userAuthentification).token;
    const { data, isLoading } = useFetch(`${process.env.REACT_APP_HOST}/api/comment/${props.postId}`, bearer, props.load);
    
    if (!isLoading) {
        return (Object.keys(data).map((keyComment, i) => (
                <article className="comment__content" key={i}>
                    <img className="comment__image" src={`${process.env.REACT_APP_HOST}/images/ninja-cat-avatar.png`} alt="avatar" />
                    <div className="comment__wrapper">
                        <h2 className="comment__text">{data[keyComment].employee.first_name} {data[keyComment].employee.last_name}</h2>
                        <p className="comment__text">{data[keyComment].content}</p>
                    </div>
                </article>
            )))
        }
    return null
}

function CommentLayout(props) {
    const [load, reload] = useState(0);

    return <section className="comment">
            <div className="comment__background"></div>
            <div className="comment__container">
                <CommentHeader updateCommentShown={props.updateCommentShown}/>
                <div className="comment__layer">
                    <Comment load={load} postId={props.postId}/>
                </div>
                <SendComment postId={props.postId} load={load} reload={reload}/>
            </div>
        </section>
}

function CommentHeader(props) {
    return  <div className="comment__head">
                <button className="comment__button" onClick={() => props.updateCommentShown(false)}>
                    <FontAwesomeIcon icon={faTimes} className="comment__cross"></FontAwesomeIcon>
                </button>
            </div>   
}



CommentLayout.propTypes = { postId: PropTypes.number, updateCommentShown: PropTypes.func }
CommentHeader.propTypes = { updateCommentShown: PropTypes.func }

export default CommentLayout;