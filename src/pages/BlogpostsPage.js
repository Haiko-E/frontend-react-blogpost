import React from 'react';
import posts from '../data/posts.json';
import { Link } from 'react-router-dom';

function BlogpostOverviewPage() {
  console.log(posts);
  return (
    <>
      <h1>Blog overzichtpagina</h1>
      <h2>Aantal blogposts = {posts.length}</h2>
      <ul>
        {posts.map((post) => (
          <li>
            <Link to={`/blog/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BlogpostOverviewPage;
