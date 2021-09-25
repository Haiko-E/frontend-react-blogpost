import React from 'react';
import users from '../data/users.json';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function LoginPage({ setLogin, login, setUser }) {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmitForm = (data) => {
    const auth = users.some(
      (user) =>
        user.username === data.username &&
        user.password === data.password
    );

    const loggedInUser = users.filter(
      (user) =>
        user.username === data.username &&
        user.password === data.password
    );
    auth && setUser(...loggedInUser);
    auth && setLogin(!login);
    auth && history.push('./');
  };

  return (
    <>
      <h2>Login Pagina</h2>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          {...register('username', {
            required: 'Username is required',
          })}
          id='username'
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          {...register('password', {
            required: 'Username is required',
          })}
          id='password'
        />
        <div>
          <button>Inloggen</button>
        </div>
      </form>
    </>
  );
}

// onClick={() => setLogin(!login)}

export default LoginPage;
