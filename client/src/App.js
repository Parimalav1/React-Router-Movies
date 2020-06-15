import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div className='app'>
      <SavedList list={savedList} />
      <div className='home'>
        <Link to='/'>Home</Link>
        <Link to='/movie-list'>Seleting a movie</Link>
      </div>
      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path='/movie-list/:movieId'>
        <Item items={movies} />
        </Route>

        <Route path='/movie-list'>
        <ItemList items={movies} />
        </Route>

        <Route path='/'>

        </Route>
      </Switch>
    </div>
  );
};

export default App;
