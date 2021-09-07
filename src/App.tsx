import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import { PlanetList } from './page/PlanetList';
import {Favorites} from './page/Favorites';
import { NavBar } from './components/NavBar';
import {Footer} from './components/Footer';
import {Loading} from './components/Loading';

/**
 * @returns {JSX.Element} - Main app component.
 */
export function App(): JSX.Element {
  return (
    <React.Suspense
      fallback={
        <>
          <Loading />
        </>
      }>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Route path="/" component={PlanetList} exact />
          <Route path="/favorites" component={Favorites} />
        </Container>
        <Footer />
      </BrowserRouter>
    </React.Suspense>
  );
}
