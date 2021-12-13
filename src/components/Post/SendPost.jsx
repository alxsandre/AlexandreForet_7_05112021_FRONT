import './SendPost.scss'
import { post } from '../../utils/fetch';

import { useState } from 'react';

function SendPost() {
    const [formData, setFormData] = useState({});

    const userAuthentification = localStorage.getItem('user');
    const userId = JSON.parse(userAuthentification).userId;
    
    
    const handleChange = (event) => {
        setFormData({...formData, content: event.target.value});
    }

    function handleSubmit(e) {
        post(`${process.env.REACT_APP_HOST}/api/post`, {...formData, employee_id: userId}, true)
    }
    
    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={handleChange} className="sendpost__text" placeholder="Type your text here" />
    </form>
    )
}

export default SendPost;