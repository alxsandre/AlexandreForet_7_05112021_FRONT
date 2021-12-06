import Header from '../components/layout/Header'
import Post from '../components/post/Post'
import SendPost from '../components/post/SendPost'
import './Wall.scss'

function Wall() {
  return (
    <div>
      <Header />
      <h1>WALL</h1>
      <SendPost />
      <Post />
    </div>
  );
}

export default Wall;