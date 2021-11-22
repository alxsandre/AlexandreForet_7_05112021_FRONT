import Header from '../components/layout/Header'
import Button from '../components/basic/Button';
import './Welcome.css'

function Welcome() {

  return (
    <div>
      <Header />
      <section className="welcome__text">
        <h1 className="welcome__title">Hello!</h1>
        <p>Good to see you here</p>
      </section>
      <section className="welcome__nav">
        <Button
          nav="/signin"
          content={<span className="button__text">Sign In</span>} />
        <Button 
          nav="/signup"
          content={<span className="button__text">Sign Up</span>} />
      </section>
    </div>
  );
}

export default Welcome;