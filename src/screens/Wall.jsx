import Header from '../components/layout/Header'
import Post from '../components/Post/Post'
import SendPost from '../components/Post/SendPost'
import './Wall.scss'

function Wall() {
  return (
    <div>
      <Header />
      <h1>WALL</h1>
      <Post />
      <SendPost />
    </div>
  );
}

export default Wall;