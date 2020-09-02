import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import routes from "../../routes";
import Reviews from "../../components/Review/Reviews";
import Casts from "../../components/Cast/Casts";
import { fetchById, getImgUrl } from "../../services/apiService";

import s from "./MoviesDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    fetchById(this.props.match.params.movieId).then((movie) =>
      this.setState({ movie })
    );
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
    const { url, path } = this.props.match;
    const date = new Date();
    return (
      <div className={s.page}>
        <button className={s.button} type="button" onClick={this.handleGoBack}>
          ◄ Back
        </button>
        <br />
        {movie && (
          <div className={s.card}>
            {movie.poster_path ? (
              <img
                src={getImgUrl(movie.poster_path)}
                alt={movie.title}
                className={s.poster}
              />
            ) : (
              <img
                src={
                  "https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE"
                }
                alt={movie.title}
                className={s.poster}
              />
            )}
            <div className={s.wrapper}>
              <h1 className={s.title}>
                {movie.title}({date.getFullYear(movie.release_date)})
              </h1>
              <p className={s.overview}>{movie.overview}</p>
              {movie.genres.length > 0 && (
                <div className={s.genres}>
                  <h3 className={s.genres}> Genres</h3>
                  {movie.genres.map(({ name }) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        <h2 className={s.adds}>Additional information</h2>
        <NavLink
          to={`${url}/reviews`}
          className={s.link}
          activeClassName={s.link_active}
        >
          Reviews
        </NavLink>
        <NavLink
          to={`${url}/casts`}
          className={s.link}
          activeClassName={s.link_active}
        >
          Casts
        </NavLink>

        <Route
          path={`${path}/reviews`}
          render={({ match: { params } }) => {
            return <Reviews movieId={params.movieId} />;
          }}
        />
        <Route
          path={`${path}/casts`}
          render={({ match: { params } }) => {
            return <Casts movieId={params.movieId} />;
          }}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
