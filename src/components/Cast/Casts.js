import React, { Component } from 'react';
import Cast from './Cast';
import { fetchById } from '../../services/apiService';

class Casts extends Component {
  state = { casts: null }

  componentDidMount() {
    this.fetchCasts()

  }

  fetchCasts = () => {
    fetchById(this.props.movieId, 'credits').then(response => this.setState({ casts: response.cast }));
  }


  render() {
    return (
      <>
        {this.state.casts && (
          <>
            <Cast casts={this.state.casts} />
          </>
        )}
      </>)
  }
}

export default Casts;