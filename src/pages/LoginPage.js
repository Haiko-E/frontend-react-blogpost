import React from 'react';

function LoginPage({ setLogin, login }) {
  return (
    <>
      <h2>Login Pagina</h2>
      <p>druk op een knop om in te loggen</p>
      <button onClick={() => setLogin(!login)}>
        Inloggen
      </button>
    </>
  );
}

export default LoginPage;
