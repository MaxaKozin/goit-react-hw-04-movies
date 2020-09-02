import React, { Component } from "react";
import PropTypes from "prop-types";

import { getImgUrl } from "../../services/apiService";

import s from "./Cast.module.css";

class Cast extends Component {
  static propTypes = {
    casts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
      })
    ),
  };

  render() {
    const { casts } = this.props;
    return (
      <div className={s.wrapper}>
        {casts.map(({ id, profile_path, name, character }) => (
          <div className={s.box} key={id}>
            {profile_path ? (
              <img
                className={s.avatar}
                src={`${getImgUrl(profile_path)}`}
                alt={name}
              />
            ) : (
              <div className={s.empty}></div>
            )}
            <h3 className={s.name}>{name}</h3>
            <p>as {character}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cast;
