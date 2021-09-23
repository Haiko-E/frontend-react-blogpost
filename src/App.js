import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogpostsPage from './pages/BlogpostsPage';
import LoginPage from './pages/LoginPage';
import BlogPage from './pages/BlogPage';
import { NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] =
    useState(false);

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
            onClick={() =>
              toggleIsAuthenticated(!isAuthenticated)
            }
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
            <HomePage />
          </Route>

          <Route path='/login'>
            <LoginPage
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
