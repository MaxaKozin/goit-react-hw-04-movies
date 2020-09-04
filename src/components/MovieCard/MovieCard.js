import React from "react";
import PropTypes from "prop-types";

import { getImgUrl } from "../../services/apiService";

import s from "./MovieCard.module.css";

const MovieCard = ({ title, poster_path, release_date }) => {
  const date = new Date();
  return (
    <div className={s.wrapper}>
      {poster_path ? (
        <img className={s.image} src={`${getImgUrl(poster_path)}`} alt="" />
      ) : (
        <img
          className={s.image}
          src={
            "https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE"
          }
          alt=""
        />
      )}
      <div className={s.title_wrapper}>
        <p className={s.title}>
          {title}({date.getFullYear(release_date)})
        </p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
};

export default MovieCard;
