import './Profile.scss';
import Header from '../components/layout/Header';
import Input from '../components/user/Input';
import Button from '../components/basic/Button';
import ArrowRight from '../components/basic/ArrowRight';


function Profile() {
  return (
    <div className="profile">
        <Header />
        <h1>Modify profile</h1>
        <form className="profile__form">
            <Input label="Change email address"/>
            <Button content={<ArrowRight />} />
        </form>
        <form className="profile__form">
            <Input label="Change password" />
            <Button content={<ArrowRight />} />
        </form>
    </div>
  );
}

export default Profile;