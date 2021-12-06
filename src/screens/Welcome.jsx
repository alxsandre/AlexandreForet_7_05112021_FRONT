import Header from '../components/layout/Header'
//import Button from '../components/basic/Button';
import './Welcome.css'
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <Header />
      <section className="welcome__text">
        <h1 className="welcome__title">Hello!</h1>
        <p>Good to see you here</p>
      </section>
      <section className="welcome__nav">
        <Link to="/signin" className="button">Sign In</Link>
        <Link to="/signup" className="button">Sign Up</Link>
      </section>
    </div>
  );
}

export default Welcome;