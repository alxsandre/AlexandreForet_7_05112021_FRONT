import './Post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import CommentLayout from '../comment/Comment';

function Post(props) {
    const [commentShown, updateCommentShown] = useState(false);
    function showComments(postId) {
        commentShown ? updateCommentShown(false) : updateCommentShown(postId);
    }

    const editPostToggle = (postId) => {
        if (props.postToUpdate) {
            props.setPostToUpdate(null);
        } else {
            props.setPostToUpdate(postId);
        }
    }

    if (!props.isLoading) {
        return (Object.keys(props.data).reverse().map((keyPost, i) => (
            <article className="post" key={i}>
                <img className="post__image" src={`${process.env.REACT_APP_HOST}/images/ninja-cat-avatar.png`} alt="avatar" />
                <div className="post__wrapper">
                    <h2 className="post__text">{props.data[keyPost].employee.first_name} {props.data[keyPost].employee.last_name}</h2>
                    <p className="post__text">{props.data[keyPost].content}</p>
                    <div className="post__icons">
                        <button aria-label="edit" className="post__button post__button--heart" onClick={() => editPostToggle(keyPost)}>
                            <FontAwesomeIcon icon={faEdit} className="post__edit"></FontAwesomeIcon>
                        </button>
                        <button aria-label="like" className="post__button post__button--heart">
                            <FontAwesomeIcon icon={faHeart} className="post__heart"></FontAwesomeIcon>
                        </button>
                        <button aria-label="open comments" className="post__button" onClick={() => showComments(props.data[keyPost].id)}>
                            <span className="post__commentnumber">{props.data[keyPost].comments.length}</span>
                            <FontAwesomeIcon icon={faComment} className="post__comment"></FontAwesomeIcon>
                        </button>
                        {commentShown === props.data[keyPost].id && <CommentLayout postId={props.data[keyPost].id} commentShown={commentShown} updateCommentShown={updateCommentShown} />}
                    </div>
                </div>    
            </article>
        )))
    }
    return null 
}

export default Post;