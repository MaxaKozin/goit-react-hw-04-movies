import React, { Component } from 'react';
import styles from './Review.module.css';

class Review extends Component {
  state = {}
  render() {
    const { reviews } = this.props;
    return (
      <>
        {reviews.map(review => (
          <div className={styles.review} key={review.id}>
            <h2 className={styles.author}>Author: {review.author}</h2>
            <p className={styles.content}>{review.content}</p>
          </div>
        ))
        }

      </>
    );
  }
}

export default Review;