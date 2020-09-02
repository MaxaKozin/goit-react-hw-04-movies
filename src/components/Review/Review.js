import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./Review.module.css";

class Review extends Component {
  static propTypes = {
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ),
  };

  render() {
    const { reviews } = this.props;
    return (
      <>
        {reviews.map(({ id, author, content }) => (
          <div className={s.review} key={id}>
            <h2 className={s.author}>Author: {author}</h2>
            <p className={s.content}>{content}</p>
          </div>
        ))}
      </>
    );
  }
}

export default Review;
