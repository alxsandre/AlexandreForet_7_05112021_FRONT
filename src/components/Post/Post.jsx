import './Post.scss'
import { useFetch } from '../../utils/hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

function Post() {
    const userAuthentification = localStorage.getItem('user');
    const bearer = JSON.parse(userAuthentification).token;
    const { data, isLoading } = useFetch('http://localhost:3000/api/post/', bearer, userAuthentification)
        
    if (!isLoading) {
        return (Object.keys(data).map((keyPost, i) => (
            <article className="post" key={i}>
                <img className="post__image" src="http://localhost:3000/images/ninja-cat-avatar.png" alt="avatar" />
                <div className="post__wrapper">
                    <h2 className="post__text">{data[keyPost].employee.first_name} {data[keyPost].employee.last_name}</h2>
                    <p className="post__text">{data[keyPost].content}</p>
                    <div className="post__icons">
                        <FontAwesomeIcon icon={faHeart} className="post__heart"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faComment} className="post__comment"></FontAwesomeIcon>
                    </div>
                </div>
            </article>
        )))
    }
    return null 
}

export default Post;