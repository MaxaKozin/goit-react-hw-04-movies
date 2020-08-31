import React, { Component } from 'react';

import s from './Searchform.module.css';

class Searchform extends Component {
  state = { query: '' }

  submitQuery = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: '' });
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  render() {
    const { query } = this.state;
    return (
      <form className={s.form} onSubmit={this.submitQuery}>
        <input className={s.input} type="text" placeholder="Search movies" value={query} onChange={this.handleChange} />
        <button className={s.button} type="submit">Search</button>
      </form>
    );
  }
}

export default Searchform;