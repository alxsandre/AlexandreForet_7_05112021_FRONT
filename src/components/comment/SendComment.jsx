import './SendComment.scss'
import { post } from '../../utils/fetch.js';
import PropTypes from 'prop-types';

import { useState } from 'react';

function SendComment(props) {
    const [formData, setFormData] = useState({});

    const userAuthentification = localStorage.getItem('user');
    const userId = JSON.parse(userAuthentification).userId;
    
    
    const handleChange = (event) => {
        setFormData({...formData, content: event.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let response = await post(`${process.env.REACT_APP_HOST}/api/comment`, {...formData, employee_id: userId, post_id: props.postId}, true, 'post');
        if (response) {
            props.reload(props.load + 1);
            setFormData({content: ''});
            e.target.reset();
        }
    }
    
    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={handleChange} className="sendcomment__text" placeholder="Type your comment here" />
    </form>
    )
}

SendComment.propTypes = { postId: PropTypes.number, load: PropTypes.number, reload: PropTypes.func}

export default SendComment;