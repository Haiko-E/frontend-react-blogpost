import React from 'react';

function HomePage({ user }) {
  const username = user.name;

  return (
    <div>
      <h1>Homepagina</h1>
      <h2>
        Welkom op dit blogplatform{' '}
        {username && `: ${username}`}
      </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aspernatur dolore explicabo a impedit aperiam
        quibusdam repellat ab harum! Omnis a perferendis eos
        excepturi dicta, accusamus illo adipisci quaerat
        dolor recusandae?
      </p>
    </div>
  );
}

export default HomePage;
