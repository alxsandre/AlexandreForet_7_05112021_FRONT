import './Post.scss';
import { post } from '../../utils/fetch.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import CommentLayout from '../comment/Comment.jsx';

function Post(props) {
    const [commentShown, updateCommentShown] = useState(false);
    function showComments(postId) {
        commentShown ? updateCommentShown(false) : updateCommentShown(postId);
    }

    const editPostToggle = (postIdReact, postIdDb) => {
        if (props.postIdReact) {
            props.setPostIdReact(null);
        } else {
            props.setPostIdReact(postIdReact);
            props.setPostIdDb(postIdDb);
        }
    }

    let deletePost = async (postToDelete) => {
        let response = await post(`${process.env.REACT_APP_HOST}/api/post/${postToDelete}`, {}, true, "delete");
        if (await response.message) {
            props.reload(props.load + 1)
        }
    }

    if (!props.isLoading) {
        return (Object.keys(props.data).reverse().map((keyPost, i) => (
            <article className={(props.postIdReact && 'post post--update') || 'post'} key={i}>
                <img className="post__image" src={`${process.env.REACT_APP_HOST}/images/ninja-cat-avatar.png`} alt="avatar" />
                <div className="post__wrapper">
                    <div className="post__head">
                        <h2 className="post__text">{props.data[keyPost].employee.first_name} {props.data[keyPost].employee.last_name}</h2>
                        <div className="post__icons">
                            {(props.user.userId === props.data[keyPost].employee_id) &&
                            <button aria-label="edit" className="post__button post__button--left" onClick={() => editPostToggle(keyPost, props.data[keyPost].id)}>
                                <FontAwesomeIcon icon={faEdit} className="post__edit"></FontAwesomeIcon>
                            </button>}
                            {(props.user.userId === props.data[keyPost].employee_id || Boolean(props.user.isAdminer)) &&
                            <button aria-label="delete" className="post__button" onClick={() => deletePost(props.data[keyPost].id)}>
                                <FontAwesomeIcon icon={faTimes} className="post__cross"></FontAwesomeIcon>
                            </button>}
                        </div>
                    </div>
                    <p className="post__text">{props.data[keyPost].content}</p>
                    <div className="post__icons">
                        <button aria-label="like" className="post__button post__button--left">
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