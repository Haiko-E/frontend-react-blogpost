import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogpostsPage from './pages/BlogpostsPage';
import LoginPage from './pages/LoginPage';
import BlogPage from './pages/BlogPage';
import { NavLink, useHistory } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

// extra opdracht, zelf verzonnen. is een object om te kijken wie er ingelogd is
const initialstate = {
  username: '',
  password: '',
  name: '',
};

function App() {
  const history = useHistory();
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] =
    useState(false);
  // extra opdracht, zelf verzonnen. Hiermee kan je de gebruikernaam op de homepagina krijgen
  const [user, setUser] = useState(initialstate);

  return (
    <div>
      <nav className='navigation'>
        <NavLink exact to='/' activeClassName='active-link'>
          Home
        </NavLink>

        {isAuthenticated && (
          <NavLink
            activeClassName='active-link'
            to='/blogoverview'
          >
            Blogposts
          </NavLink>
        )}

        {isAuthenticated ? (
          <button
            onClick={() => {
              toggleIsAuthenticated(!isAuthenticated);
              setUser(initialstate);
              history.push('./');
            }}
          >
            Uitloggen
          </button>
        ) : (
          <NavLink
            activeClassName='active-link'
            to='/login'
          >
            Login
          </NavLink>
        )}
      </nav>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <HomePage user={user} />
          </Route>

          <Route path='/login'>
            <LoginPage
              setUser={setUser}
              login={isAuthenticated}
              setLogin={toggleIsAuthenticated}
            />
          </Route>

          <PrivateRoute
            login={isAuthenticated}
            path='/blogoverview/'
          >
            <BlogpostsPage />
          </PrivateRoute>

          <PrivateRoute
            login={isAuthenticated}
            path='/blog/:id'
          >
            <BlogPage />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
