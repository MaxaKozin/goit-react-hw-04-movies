import React, { Component } from 'react';
import { fetchByQuery, getImgUrl } from '../../services/apiService';
import styles from './MoviesPage.module.css';
import Searchform from '../../components/Searchform/Searchform';
import { NavLink } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    const query = this.props.location.search;
    console.log(query);
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.location.search;
    const nextQuery = this.props.location.search;

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    if (query) { fetchByQuery(query).then(films => this.setState({ movies: films })) }


  }

  handleChangeQuery = query => {
    if (query.length > 0) {
      this.props.history.push({
        ...this.props.location,
        search: `query=${query}`,
      })
    };
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    console.log(movies);
    return (
      <div className={styles.movies}>
        <Searchform onSubmit={this.handleChangeQuery} />

        {movies.length > 0 && (
          <>
            <p className={styles.results}> Results for: {this.props.location.search.slice(7)}</p>
            <ul className={styles.list}>
              {movies.map(movie => (
                <li key={movie.id} className={styles.item}>
                  <NavLink to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                    className={styles.link}
                    activeClassName={styles.link_active}
                  >
                    <div className={styles.wrapper}>
                      <img className={styles.image} src={`${getImgUrl(movie.poster_path)}`} alt='' />
                      <p className={styles.title}>{movie.title}</p>
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
