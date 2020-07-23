import React, { Component } from 'react';
import styles from './MoviesDetailsPage.module.css';
import { fetchById, getImgUrl } from '../../services/apiService';
import routes from '../../routes';
import Reviews from '../../components/Review/Reviews';
import Casts from '../../components/Cast/Casts';
import { NavLink, Route } from 'react-router-dom';

class MovieDetailsPage extends Component {
  state = {
    movie: null
  }

  componentDidMount() {
    fetchById(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.movies);
  };

  render() {
    const { movie } = this.state;
    const date = new Date();
    return (
      <div className={styles.page}>
        <button className={styles.button} type="button" onClick={this.handleGoBack}>
          ◄ Back
        </button>
        <br />

        {this.state.movie && (

          <div className={styles.card}>
            <img src={getImgUrl(movie.poster_path)} alt={movie.title} className={styles.poster} />
            <div className={styles.wrapper}>
              <h1 className={styles.title}>{this.state.movie.title}({date.getFullYear(movie.release_date)})</h1>
              <p className={styles.overview}>{movie.overview}</p>
              {movie.genres.length > 0 && (<div className={styles.genres}>
                <h3 className={styles.genres}> Genres</h3>
                {movie.genres.map(genre => (
                  <span key={genre.name}>{genre.name}</span>
                ))}
              </div>)}
            </div>
          </div>
        )
        }
        <h2 className={styles.adds}>Additional information</h2>
        <NavLink
          to={`${this.props.match.url}/reviews`}
          className={styles.link}
          activeClassName={styles.link_active}
        >Reviews</NavLink>
        <NavLink to={`${this.props.match.url}/casts`} className={styles.link} activeClassName={styles.link_active}>Casts</NavLink>

        <Route path={`${this.props.match.path}/reviews`} render={
          props => {
            return <Reviews movieId={props.match.params.movieId} />
          }
        } />
        <Route path={`${this.props.match.path}/casts`} render={
          props => {
            return <Casts movieId={props.match.params.movieId} />
          }
        } />
      </div>
    );
  }
}

export default MovieDetailsPage;