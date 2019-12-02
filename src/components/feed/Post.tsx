import React from 'react'

interface PostProps{
  post:{
    id: number;
    text: string;
    favoriteCount: number;
    postedBy: number;
    isShowcase: boolean;
    creationDate: Date;
    updatedAt: Date;
    userDetails: {
        id: number;
        userId: number;
        displayName: string;
        description: string;
        postCount: number;
        followersCount: number;
        followingCount: number;
        creationDate: Date;
        updatedAt: Date;
    }
  }
}

export default function Post(props: PostProps) {

  let getDate = () => {
    let postedDate = new Date(props.post.creationDate);
    let time = Date.now() - postedDate.getTime();
    return (Math.round(Math.floor(time / 1000) / 60));
  }

  return (
    <li className="collection-item">
      <div className="avatar"><i className="material-icons circle">account_circle</i></div>
      <div className="details">
        <div className="who">
          <div className="username">{ props.post.userDetails.displayName }</div>
          <div className="time">{getDate() + 'm'}</div>
        </div>
        <div className="post">
          {props.post.text}
        </div>
      </div>
    </li>
  )
}
