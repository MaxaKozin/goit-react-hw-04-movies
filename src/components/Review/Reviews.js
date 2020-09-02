import React, { Component } from "react";
import PropTypes from "prop-types";

import Review from "./Review";
import { fetchById } from "../../services/apiService";

import s from "./Review.module.css";

class Reviews extends Component {
  static propTypes = {
    movieId: PropTypes.string.isRequired,
  };

  state = { reviews: null };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    fetchById(this.props.movieId, "reviews").then(({ results }) =>
      this.setState({ reviews: results })
    );
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews && (
          <>
            <h3 className={s.total}>Total reviews: {reviews.length}</h3>
            <Review reviews={reviews} />
          </>
        )}
      </>
    );
  }
}

export default Reviews;
