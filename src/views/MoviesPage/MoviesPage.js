import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Searchform from '../../components/Searchform/Searchform';
import { fetchByQuery, getImgUrl } from '../../services/apiService';

import s from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    const query = this.props.location.search;
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate({ location: { search } }, prevState) {
    const prevQuery = search;
    const nextQuery = this.props.location.search;

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    if (query) { fetchByQuery(query).then(films => this.setState({ movies: films })) }
  }

  handleChangeQuery = query => {
    const { history, location } = this.props;
    if (query.length > 0) {
      history.push({
        ...location,
        search: `query=${query}`,
      })
    };
  };

  render() {
    const { movies } = this.state;
    const { match, location } = this.props;
    return (
      <div className={s.movies}>
        <Searchform onSubmit={this.handleChangeQuery} />
        {movies.length > 0 && (
          <>
            <p className={s.results}> Results for: {location.search.slice(7)}</p>
            <ul className={s.list}>
              {movies.map(({ id, poster_path, title }) => (
                <li key={id} className={s.item}>
                  <NavLink to={{
                    pathname: `${match.url}/${id}`,
                    state: { from: location },
                  }}
                    className={s.link}
                    activeClassName={s.link_active}
                  >
                    <div className={s.wrapper}>
                      {poster_path ? <img className={s.image} src={`${getImgUrl(poster_path)}`} alt='' />
                        : <img className={s.image} src={"https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE"} alt='' />}
                      <p className={s.title}>{title}</p>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default MoviesPage;
