import './Profile.scss';
import Header from '../components/layout/Header.jsx';
import Input from '../components/user/Input.jsx';
import InputPassword from '../components/user/InputPassword.jsx';
import Button from '../components/basic/Button.jsx';
import ArrowRight from '../components/basic/ArrowRight.jsx';
import { post } from '../utils/fetch';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Profile() {
  const [email, setEmail] = useState({
    email: ""
  });
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  const [messageProfil, setMessageProfil] = useState('');

  const [password, setPassword] = useState({
    password: ""
  });

  const handleChangeEmail = (event) => {
    setEmail({...email, email: event.target.value});
  }

  const handleChangePassword = (event) => {
    setPassword({...password, password: event.target.value});
  }

  const userAuthentification = localStorage.getItem('user');
  const userId = JSON.parse(userAuthentification).userId;

  async function handleSubmitEmail(e) {
    e.preventDefault();
    let response = await post(
      `${process.env.REACT_APP_HOST}/api/auth/profile/${userId}`,
      email,
      true,
      'put'
    );
    if (await response.error) {
      setMessageEmail(response.error);
    } else if (await response) {
      setMessageEmail(response.message);
      setEmail({email: ''});
      e.target.reset();
    }
  }

  async function handleSubmitPassword(e) {
    e.preventDefault();
    let response = await post(
      `${process.env.REACT_APP_HOST}/api/auth/profile/${userId}`,
      password,
      true,
      'put'
    );
    if (await response.error) {
      setMessagePassword(response.error);
    } else if (await response) {
      setMessagePassword(response.message);
      setPassword({password: ''});
      e.target.reset();
    }
  }

  let navigate = useNavigate();
  
  async function deleteProfil(e) {
    e.preventDefault();
    let response = await post(
      `${process.env.REACT_APP_HOST}/api/auth/${userId}`,
      {},
      true,
      'delete'
    );
    if (await response.error) {
      setMessageProfil(response.error);
    } else if (await response) {
      setMessageProfil(response.message);
      localStorage.removeItem('user');
      navigate(`/`);
    }
  }

  return (
    <div className="profile">
        <Header />
        <div className="layer layer--profile">
          <h1>Modify profile</h1>
          <form className="profile__form" onSubmit={(e) => handleSubmitEmail(e)}>
            <Input label="email" extraLabel={'Change your '} handleChange={handleChangeEmail} />
            <Button ariaLabel={'submit to change email'} content={<ArrowRight />} />
          </form>
          {messageEmail && <p className="message">{messageEmail}</p>}
          <form className="profile__form" onSubmit={(e) => handleSubmitPassword(e)}>
            <InputPassword label="password" extraLabel={'Change your '} handleChange={handleChangePassword} />
            <Button ariaLabel={'submit to change password'}  content={<ArrowRight />} />
          </form>
          {messagePassword && <p className="message">{messagePassword}</p>}
          <div className="field">
            <label htmlFor="deleteprofil" className="field__label">Delete your profil:</label>
            <input type="button" value="DELETE" id="deleteprofil" className="field__input field__input--delete" name="deleteprofil" onClick={(e) => deleteProfil(e)} />  
          </div>
          {messageProfil && <p className="message">{messageProfil}</p>}
        </div>
    </div>
  );
}

export default Profile;