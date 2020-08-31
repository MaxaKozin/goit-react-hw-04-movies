import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { fetchRated, getImgUrl } from '../../services/apiService';

import s from './HomePage.module.css';

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
    const { match, location } = this.props;
    const date = new Date();
    return (
      <>
        {movies.length > 0 && (
          <div className={s.homepage}>
            <h2 className={s.heading}>Trending today</h2>
            <ul className={s.list}>
              {movies.map(({ id, poster_path, title, release_date }) => (
                <li key={id} className={s.item}>
                  <NavLink
                    className={s.link}
                    to={{
                      pathname: `${match.url}movies/${id}`,
                      state: { from: location },
                    }}
                  >
                    <div className={s.wrapper}>
                      {poster_path ? <img className={s.image} src={`${getImgUrl(poster_path)}`} alt='' /> :
                        <img className={s.image} src={"https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE"} alt='' />}
                      <div className={s.title_wrapper}>
                        <p className={s.title}>{title}({date.getFullYear(release_date)})</p>
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