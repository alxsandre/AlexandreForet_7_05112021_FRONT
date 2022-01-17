import Header from '../components/user/header.jsx';
import Input from '../components/user/Input.jsx';
import Button from '../components/basic/Button.jsx';
import ArrowRight from '../components/basic/ArrowRight.jsx';
import './Sign.scss';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { post } from '../utils/fetch';


function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');

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
      `${process.env.REACT_APP_HOST}/api/auth/login`,
      formData,
      null,
      'post'
    );
    if (await response.error) {
      setErrorMessage(response.error);
    } else if (await response) {
      localStorage.setItem('user', JSON.stringify(await response));
      navigate(`/wall`);
    }
  }

  return (
    <div className="layer">
      <Header theme="Login to"/>
      <form className="sign__form" onSubmit={(e) => handleSubmit(e)}>
        {errorMessage && <p className="error__message">{errorMessage}</p>}
        <Input label="email" handleChange={handleChangeEmail} />
        <Input label="password" handleChange={handleChangePassword} />
        <Button ariaLabel="submit to login" content={<ArrowRight />} />
      </form>
    </div>
  );
}

export default SignIn;