import React, { Component } from 'react';
import { getImgUrl } from '../../services/apiService';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {}
  render() {
    const { casts } = this.props;
    return (
      <div className={styles.wrapper}>
        {casts.map(cast => (
          <div className={styles.box} key={cast.id}>
            {cast.profile_path ? <img className={styles.avatar} src={`${getImgUrl(cast.profile_path)}`} alt={cast.name} /> :
              <div className={styles.empty}></div>}
            <h3 className={styles.name}>{cast.name}</h3>
            <p>as {cast.character}</p>

          </div>
        ))
        }

      </div>
    );
  }
}

export default Cast;