import React, { Component } from 'react';
import styles from './Searchform.module.css';

class Searchform extends Component {
  state = { query: '' }

  submitQuery = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });

  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.submitQuery}>
        <input className={styles.input} type="text" placeholder="Search movies" value={this.state.query} onChange={this.handleChange} />
        <button className={styles.button} type="submit">Search</button>
      </form>
    );
  }
}

export default Searchform;