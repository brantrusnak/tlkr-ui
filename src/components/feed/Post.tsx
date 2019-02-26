import React from 'react'

// id	1
// text	Hello!
// favoriteCount	0
// postedBy	1
// isShowcase	false
// createdAt	2019-02-26T17:28:44.000Z
// updatedAt	2019-02-26T17:28:44.000Z

interface PostProps{
    text: string;
}

export default function Post(props: PostProps) {
  return (
    <div className="z-depth-2">
      Post: {props.text}
    </div>
  )
}
