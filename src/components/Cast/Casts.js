import React, { Component } from "react";
import PropTypes from "prop-types";

import Cast from "./Cast";
import { fetchById } from "../../services/apiService";

class Casts extends Component {
  static propTypes = {
    movieId: PropTypes.string.isRequired,
  };

  state = { casts: null };

  componentDidMount() {
    this.fetchCasts();
  }

  fetchCasts = () => {
    fetchById(this.props.movieId, "credits").then(({ cast }) =>
      this.setState({ casts: cast })
    );
  };

  render() {
    const { casts } = this.state;
    return <>{casts && <Cast casts={casts} />}</>;
  }
}

export default Casts;
