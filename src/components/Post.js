import React from 'react';

function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>작성자: {post.author}</p>
      <p>작성일: {post.date}</p>
    </div>
  );
}

export default Post;