import React, { Suspense, lazy, Component } from "react";
import { Switch, Route } from "react-router-dom";

import Appbar from "./components/Appbar/Appbar";
import routes from "./routes";

import "./App.css";

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MoviesDetailsPage" /* webpackChunkName: "movies-details-page" */
  )
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
