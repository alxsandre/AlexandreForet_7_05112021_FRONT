import Header from '../components/user/Header';
import Input from '../components/user/Input';
import Button from '../components/basic/Button';
import ArrowRight from '../components/basic/ArrowRight';
import './Sign.css';

import { useState } from 'react';
import { post } from '../utils/fetch';


function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChangeEmail = (event) => {
    setFormData({...formData, email: event.target.value});
  }

  const handleChangePassword = (event) => {
    setFormData({...formData, password: event.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await post(
      'http://localhost:3000/api/auth/login',
      formData
    );
    localStorage.setItem('user', JSON.stringify(await response));
  }

  return (
    <div>
      <Header theme="Sign in to"/>
      <form className="sign__form" onSubmit={(e) => handleSubmit(e)}>
        <ul>
          <Input label="email" handleChange={handleChangeEmail} />
          <Input label="password" handleChange={handleChangePassword} />
          
          <Button content={<ArrowRight />} />
        </ul>
      </form>
    </div>
  );
}

export default SignIn;