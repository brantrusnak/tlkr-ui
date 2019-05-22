import React from 'react'
import HTTPUtil from '../util/HTTPUtil';

interface PostProps{
  post:{
    id: number;
    text: string;
    favoriteCount: number;
    postedBy: number;
    isShowcase: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
}

export default function Post(props: PostProps) {

  let getDate = () => {
    let postedDate = new Date(props.post.createdAt);
    let time = Date.now() - postedDate.getTime();
    return (Math.round(Math.floor(time / 1000) / 60));
  }

  let getUser = async () => {
    let http = new HTTPUtil();
    let data = await http.GET(`http://localhost:5000/user/${props.post.postedBy}`);
    let user = await data.json();
    return user.response.displayName;
  }

  getUser()

  return (
    <li className="collection-item">
      <div className="avatar"><i className="material-icons circle">account_circle</i></div>
      <div className="details">
        <div className="who">
          <div className="username">{getUser() + ' '}</div>
          <div className="time">{getDate() + 'm'}</div>
        </div>
        <div className="post">
          {props.post.text}
        </div>
      </div>
    </li>
  )
}
