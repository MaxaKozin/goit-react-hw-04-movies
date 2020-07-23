import React, { Suspense, lazy, Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Appbar from './components/Appbar/Appbar';


const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MoviesDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

class App extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <div className='App'>
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
    )
  }
}

export default App;
