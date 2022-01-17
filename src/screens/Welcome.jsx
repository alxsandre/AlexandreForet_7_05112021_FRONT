import { HeaderWelcome } from '../components/layout/Header.jsx'
import './Welcome.css'
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <HeaderWelcome />
      <div className="layer">
        <section className="welcome__text">
          <h1 className="welcome__title">Hello!</h1>
          <p>Good to see you here</p>
        </section>
        <section className="welcome__nav">
          <Link to="/signin" className="link__asbutton">Login</Link>
          <Link to="/signup" className="link__asbutton">Sign Up</Link>
        </section>
      </div>
    </div>
  );
}

export default Welcome;