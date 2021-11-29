import Header from '../components/layout/Header'
import Post from '../components/user/Post'
import './Wall.scss'

function Wall() {
  return (
    <div>
      <Header />
      <h1>WALL</h1>
      <Post />
    </div>
  );
}

export default Wall;