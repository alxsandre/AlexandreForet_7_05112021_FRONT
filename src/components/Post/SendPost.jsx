import './SendPost.scss'
import { post } from '../../utils/fetch';
import PropTypes from 'prop-types';
import { useState } from 'react';

function SendPost(props) {
    const [formData, setFormData] = useState({});

    const userAuthentification = localStorage.getItem('user');
    const userId = JSON.parse(userAuthentification).userId;
    
    
    const handleChange = (event) => {
        if (props.postToUpdate) {
            props.upDateData(props.postToUpdate, event);
        }
        setFormData({...formData, content: event.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (props.postToUpdate) {
            let response = post(`${process.env.REACT_APP_HOST}/api/post/88`, {...formData}, true, "put");
            if (response) {
                props.reload(props.load + 1)
                setFormData({content: ''});
                e.target.reset();
            }
        } else {
            let response = post(`${process.env.REACT_APP_HOST}/api/post`, {...formData, employee_id: userId}, true, "post");
            if (response) {
                props.reload(props.load + 1)
                setFormData({content: ''});
                e.target.reset();
            }
        }
        
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={handleChange} className="sendpost__text" placeholder="Type your text here" />
        </form>
    )
}

SendPost.propTypes = {
    load: PropTypes.number,
    reload: PropTypes.func,
    postToUpdate: PropTypes.string,
    upDateData: PropTypes.func
  }

export default SendPost;