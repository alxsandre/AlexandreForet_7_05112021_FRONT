import Header from '../components/layout/Header';
import Post from '../components/post/Post';
import SendPost from '../components/post/SendPost';
import './Wall.scss';
import { useState } from 'react';

import { useFetch } from '../utils/hooks/useFetch'


function Wall() {
  const [load, reload] = useState(0);

  const userAuthentification = localStorage.getItem('user');
  const bearer = JSON.parse(userAuthentification).token;
  const url = `${process.env.REACT_APP_HOST}/api/post/`;
  let { data, isLoading, upDateData } = useFetch(url, bearer, load);


  const [postKey, setPostKey] = useState();


  

  return (
    <div>
      <Header />
      <h1>WALL</h1>
      <SendPost load={load} reload={reload} postToUpdate={postKey} upDateData={upDateData}/>
      <Post data={data} isLoading={isLoading} setPostToUpdate={setPostKey} postToUpdate={postKey}/>
    </div>
  );
}

export default Wall;