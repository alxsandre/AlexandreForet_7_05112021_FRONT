import './SendPost.scss'
import { post } from '../../utils/fetch.js';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

function SendPost(props) {
    const [formData, setFormData] = useState({});

    const userAuthentification = localStorage.getItem('user');
    const userId = JSON.parse(userAuthentification).userId;
    
    
    const handleChange = (event) => {
        if (props.postIdReact) {
            props.upDateData(props.postIdReact, event);
        }
        setFormData({...formData, content: event.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (props.postIdDb) {
            let response = await post(`${process.env.REACT_APP_HOST}/api/post/${props.postIdDb}`, {...formData}, true, "put");
            if (await response) {
                props.reload(props.load + 1)
                props.setPostIdReact(null)
                setFormData({content: ''});
                props.setPostIdDb(null)
                e.target.reset();
            }
        } else {
            let response = await post(`${process.env.REACT_APP_HOST}/api/post`, {...formData, employee_id: userId}, true, "post");
            if (await response) {
                props.reload(props.load + 1)
                setFormData({content: ''});
                e.target.reset();
            }
        }
        
    }

    const inputToSendPost = useRef(null);
    if (props.postIdReact) {
        inputToSendPost.current.focus();
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input ref={inputToSendPost} type="text" onChange={handleChange} className="sendpost__text" placeholder="Type your text here" />
        </form>
    )
}

SendPost.propTypes = {
    load: PropTypes.number,
    reload: PropTypes.func,
    postIdReact: PropTypes.string,
    postIdDb: PropTypes.number,
    upDateData: PropTypes.func,
    setPostIdDb: PropTypes.func,
    setPostIdReact: PropTypes.func
  }

export default SendPost;