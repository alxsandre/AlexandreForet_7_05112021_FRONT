import './Post.scss'
import { useFetch } from '../../utils/hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Comment from '../comment/Comment';

function Post() {
    const userAuthentification = localStorage.getItem('user');
    const bearer = JSON.parse(userAuthentification).token;
    const { data, isLoading } = useFetch(`${process.env.REACT_APP_HOST}/api/post/`, bearer, userAuthentification);
    const [commentShown, updateCommentShown] = useState(false);


    function showComments(postId) {
        commentShown ? updateCommentShown(false) : updateCommentShown(postId);
    }

    if (!isLoading) {
        return (Object.keys(data).reverse().map((keyPost, i) => (
            <article className="post" key={i}>
                <img className="post__image" src={`${process.env.REACT_APP_HOST}/images/ninja-cat-avatar.png`} alt="avatar" />
                <div className="post__wrapper">
                    <h2 className="post__text">{data[keyPost].employee.first_name} {data[keyPost].employee.last_name}</h2>
                    <p className="post__text">{data[keyPost].content}</p>
                    <div className="post__icons">
                        <button className="post__button post__button--heart">
                            <FontAwesomeIcon icon={faHeart} className="post__heart"></FontAwesomeIcon>
                        </button>
                        <button className="post__button" onClick={() => showComments(data[keyPost].id)}>
                            <FontAwesomeIcon icon={faComment} className="post__comment"></FontAwesomeIcon>
                        </button>
                        {commentShown === data[keyPost].id && <Comment postId={data[keyPost].id} commentShown={commentShown} updateCommentShown={updateCommentShown} />}
                    </div>
                </div>    
            </article>
        )))
    }
    return null 
}

export default Post;