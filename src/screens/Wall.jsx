import Header from '../components/layout/Header';
import Post from '../components/post/Post';
import SendPost from '../components/post/SendPost';
import './Wall.scss';
import { useState } from 'react';

function Wall() {
  const [load, reload] = useState(0);

  return (
    <div>
      <Header />
      <h1>WALL</h1>
      <SendPost load={load} reload={reload}/>
      <Post load={load}/>
    </div>
  );
}

export default Wall;