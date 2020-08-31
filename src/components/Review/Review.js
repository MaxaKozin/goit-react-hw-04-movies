import React, { Component } from 'react';

import s from './Review.module.css';

class Review extends Component {
  state = {}
  render() {
    const { reviews } = this.props;
    return (
      <>
        {reviews.map(({ id, author, content }) => (
          <div className={s.review} key={id}>
            <h2 className={s.author}>Author: {author}</h2>
            <p className={s.content}>{content}</p>
          </div>
        ))
        }

      </>
    );
  }
}

export default Review;