import React, { Component } from 'react';
import Review from './Review';
import { fetchById } from '../../services/apiService';
import styles from './Review.module.css';

class Reviews extends Component {
  state = { reviews: null }

  componentDidMount() {
    this.fetchReviews()

  }

  fetchReviews = () => {
    fetchById(this.props.movieId, 'reviews').then(response => this.setState({ reviews: response.results }))
  }


  render() {
    return (
      <>
        {this.state.reviews && (
          <>
            <h3 className={styles.total}>Total reviews: {this.state.reviews.length}</h3>
            <Review reviews={this.state.reviews} />
          </>
        )}
      </>)
  }
}

export default Reviews;