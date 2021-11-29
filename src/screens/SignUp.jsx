import Header from '../components/user/Header';
import Input from '../components/user/Input';
import Button from '../components/basic/Button';
import ArrowRight from '../components/basic/ArrowRight';
import './Sign.css';

import { useState } from 'react';
import { post } from '../utils/fetch';

function SignUp() {
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    email: "",
    password: "",
    photo: "https://groupomania/photo/"
  });

  const handleChangeLastName = (event) => {
    setFormData({...formData, last_name: event.target.value});
  }

  const handleChangeFirstName = (event) => {
    setFormData({...formData, first_name: event.target.value});
  }

  const handleChangeEmail = (event) => {
    setFormData({...formData, email: event.target.value});
  }

  const handleChangePassword = (event) => {
    setFormData({...formData, password: event.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await post(
      'http://localhost:3000/api/auth/signup',
      formData
    );
    console.log(await response)
  }

  return (
    <div>
      <Header theme="Sign up to"/>
      <form className="sign__form" onSubmit={(e) => handleSubmit(e)}>
        <ul>
          <Input label="last name" handleChange={handleChangeLastName} />
          <Input label="first name" handleChange={handleChangeFirstName} />
          <Input label="email" handleChange={handleChangeEmail} />
          <Input label="password" handleChange={handleChangePassword} />
          <Button nav="/signin" content={<ArrowRight />} />
        </ul>
      </form>
    </div>
  );
}

export default SignUp;