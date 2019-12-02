import React from 'react';
import Post from './Post';

interface PostListProps {
  posts:{
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
  }[];
}

export default function PostList(props: PostListProps) {
  let posts = props.posts.map(post => <Post key={post.id} post={post} />);
  return <ul className="collection">{posts}</ul>
}
