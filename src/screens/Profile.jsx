import './Profile.scss';
import Header from '../components/layout/Header';
import Input from '../components/user/Input';
import Button from '../components/basic/Button';
import ArrowRight from '../components/basic/ArrowRight';
import { post } from '../utils/fetch';
import { useState } from 'react';


function Profile() {
  const [email, setEmail] = useState({
    email: ""
  });
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');

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
              <Input label="password" extraLabel={'Change your '} handleChange={handleChangePassword} />
              <Button ariaLabel={'submit to change password'}  content={<ArrowRight />} />
          </form>
          {messagePassword && <p className="message">{messagePassword}</p>}
        </div>
    </div>
  );
}

export default Profile;