import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchRated, getImgUrl } from '../../services/apiService';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetchRated().then(result => {
      this.setState({ movies: result })
    });
  }
  render() {
    const { movies } = this.state;
    const { match } = this.props;
    const date = new Date();
    return (
      <>
        {movies.length > 0 && (
          <div className={styles.homepage}>
            <h2 className={styles.heading}>Trending today</h2>
            <ul className={styles.list}>
              {movies.map(movie => (
                <li key={movie.id} className={styles.item}>
                  <NavLink
                    className={styles.link}
                    to={{
                      pathname: `${match.url}movies/${movie.id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    <div className={styles.wrapper}>
                      <img className={styles.image} src={`${getImgUrl(movie.poster_path)}`} alt='' />
                      <div className={styles.title_wrapper}>
                        <p className={styles.title}>{movie.title}({date.getFullYear(movie.release_date)})</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )
        }
      </>
    );
  }
}

export default HomePage;