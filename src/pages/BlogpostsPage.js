import React from 'react';
import posts from '../data/posts.json';
import { Link } from 'react-router-dom';

function BlogpostOverviewPage() {
  return (
    <>
      <h1>Blog overzichtpagina</h1>
      <h2>Aantal blogposts = {posts.length}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BlogpostOverviewPage;
