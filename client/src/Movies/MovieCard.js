import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom'

const MovieCard = (props) => {
  const { wantaMovie } = props;
  const { url, path } = useRouteMatch()


  return;
  <div>
    {wantaMovie.map(x => (
      <div className='movie-card'
        key={wantaMovie.id}>
        <Link to={`${url}/${wantaMovie.id}`}>
          <img className='movie-list-image'
            src={wantaMovie.imageUrl}
            alt={wantaMovie.name} />
          <p>{wantaMovie.name}</p>
        </Link>
      </div>
    ))}
  </div>
};

export default MovieCard;
