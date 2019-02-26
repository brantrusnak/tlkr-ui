import React from 'react';
import Post from './Post';

interface PostListProps {
  posts: { id: number; text: string }[];
}

export default function PostList(props: PostListProps) {
  let posts = props.posts.map(post => <Post key={post.id} text={post.text} />);
  return <div>{posts}</div>;
}
