import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts.json';

function BlogpostPage() {
  const { id } = useParams();
  const post = posts[id - 1];
  return (
    <div>
      <h1>
        {post.title} {post.id}
      </h1>
      <h4>{post.date}</h4>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogpostPage;
