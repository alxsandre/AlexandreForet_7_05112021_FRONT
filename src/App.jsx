import Header from './components/User/Header';
import Input from './components/User/Input';
import { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  let handleChangePassword = (event) => {
    setFormData({...formData, password: event.target.value});
    console.log(formData)
  }

  return (
    <div>
      <Header theme="Sign in to"/>
      
      <ul>
        <Input label="email" />
        <Input label="password" handleChange={handleChangePassword} />
      </ul>
    </div>
  );
}

export default App;
