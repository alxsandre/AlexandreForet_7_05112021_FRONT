import Header from '../components/user/Header';
import Input from '../components/user/Input';
import Button from '../components/basic/Button';
import { useState } from 'react';


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

  return (
    <div>
      <Header theme="Sign in to"/>
      
      <ul>
        <Input label="email" handleChange={handleChangeEmail} />
        <Input label="password" handleChange={handleChangePassword} />
        <Button />
      </ul>
    </div>
  );
}

export default SignIn;