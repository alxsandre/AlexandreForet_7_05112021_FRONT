import './SendComment.scss'
import { post } from '../../utils/fetch';
import PropTypes from 'prop-types';

import { useState } from 'react';

function SendComment(props) {
    const [formData, setFormData] = useState({});

    const userAuthentification = localStorage.getItem('user');
    const userId = JSON.parse(userAuthentification).userId;
    
    
    const handleChange = (event) => {
        setFormData({...formData, content: event.target.value});
    }

    function handleSubmit(e) {
        post('http://localhost:3000/api/comment', {...formData, employee_id: userId, post_id: props.postId}, true)
    }
    
    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={handleChange} className="sendcomment__text" placeholder="Type your comment here" />
    </form>
    )
}

SendComment.propTypes = { postId: PropTypes.number }

export default SendComment;