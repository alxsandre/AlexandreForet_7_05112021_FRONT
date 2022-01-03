import { Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Wall from './screens/Wall';
import Profile from './screens/Profile';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
