import React from 'react';
import Post from './Post';

interface PostListProps {
  posts: {
    id: number;
    text: string;
    favoriteCount: number;
    postedBy: number;
    isShowcase: boolean;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export default function PostList(props: PostListProps) {
  let posts = props.posts.map(post => <Post key={post.id} post={post} />);
  return <ul className="collection">{posts}</ul>
}
