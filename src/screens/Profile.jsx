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
    console.log(email)
    let response = await post(
      `${process.env.REACT_APP_HOST}/api/auth/profile/${userId}`,
      email,
      true,
      'put'
    );
      if (response) {
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
      if (response) {
        setPassword({password: ''});
        e.target.reset();
    }
  }

  return (
    <div className="profile">
        <Header />
        <h1>Modify profile</h1>
        <form className="profile__form" onSubmit={(e) => handleSubmitEmail(e)}>
            <Input label="email" handleChange={handleChangeEmail} />
            <Button content={<ArrowRight />} />
        </form>
        <form className="profile__form" onSubmit={(e) => handleSubmitPassword(e)}>
            <Input label="password" handleChange={handleChangePassword} />
            <Button content={<ArrowRight />} />
        </form>
    </div>
  );
}

export default Profile;