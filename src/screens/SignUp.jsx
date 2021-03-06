import Header from '../components/user/Header.jsx';
import Input from '../components/user/Input.jsx';
import InputPassword from '../components/user/InputPassword.jsx';
import Button from '../components/basic/Button.jsx';
import ArrowRight from '../components/basic/ArrowRight.jsx';
import './Sign.scss';

import { useNavigate } from "react-router-dom";
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

  const [errorMessage, setErrorMessage] = useState('');

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

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await post(
      `${process.env.REACT_APP_HOST}/api/auth/signup`,
      formData,
      null,
      'post'
    );
    if (await response.error) {
      setErrorMessage(response.error);
    } else if (await response) {
      let response = await post(
        `${process.env.REACT_APP_HOST}/api/auth/login`,
        {email: formData.email, password: formData.password},
        null,
        'post'
      );
      localStorage.setItem('user', JSON.stringify(await response));
      navigate(`/wall`);
    }
  }
  

  return (
    <div className="layer">
      <Header theme="Sign up to"/>
      <form className="sign__form" onSubmit={(e) => handleSubmit(e)}>
        {errorMessage && <p className="error__message">{errorMessage}</p>}
        <Input label="last name" handleChange={handleChangeLastName} />
        <Input label="first name" handleChange={handleChangeFirstName} />
        <Input label="email" handleChange={handleChangeEmail} />
        <InputPassword label="password" handleChange={handleChangePassword} />
        <Button ariaLabel="submit to create profile" nav="/signin" content={<ArrowRight />} />
      </form>
    </div>
  );
}

export default SignUp;