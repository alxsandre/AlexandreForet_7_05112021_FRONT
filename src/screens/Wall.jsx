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
  let { data, isLoading, upDateData, error } = useFetch(url, bearer, load);
  const [postIdReact, setPostIdReact] = useState();
  const [postIdDb, setPostIdDb] = useState();

  const removefocus = () => {
    if (postIdReact) {
      setPostIdReact(null);
    }
  }

  if (error || data.error  === 0) {
    return (
      <div>
        <Header />
        <div className="layer">
          <h1 className="error">Error - try again!</h1>
        </div>
      </div>);
  } else {
    return (
      <div>
        <Header />
          <h1>WALL</h1>
          <SendPost 
            load={load} 
            reload={reload} 
            postIdReact={postIdReact}
            setPostIdReact={setPostIdReact} 
            upDateData={upDateData}
            postIdDb={postIdDb}
            setPostIdDb={setPostIdDb}/>
        <div className="layer" onClick={() => removefocus()}>
          <Post 
            data={data} 
            isLoading={isLoading}
            user={JSON.parse(userAuthentification)}
            load={load}
            reload={reload}
            setPostIdReact={setPostIdReact}
            postIdReact={postIdReact}
            setPostIdDb={setPostIdDb}/>
        </div>
      </div>);
  }
}

export default Wall;