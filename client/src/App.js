import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

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
      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path='/movies/:movieId'>
          <Movie />
        </Route>

        <Route path='/'>
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
