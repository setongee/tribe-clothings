import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'

const HatPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const JacketPage = () => (
  <div>
    <h1>Jackets PAGE</h1>
  </div>
)

const SneakersPage = () => (
  <div>
    <h1>Sneakers PAGE</h1>
  </div>
)

const WomenPage = () => (
  <div>
    <h1>Womens PAGE</h1>
  </div>
)

const MenPage = () => (
  <div>
    <h1>Mens PAGE</h1>
  </div>
)



function App() {
  return (
    <div>
      <Switch>

        <Route exact path='/home'>
          <HomePage/>
        </Route>

        <Route exact path='/'>
          <HomePage/>
        </Route>

        <Route exact path='/shop/hats'>
          <HatPage/>
        </Route>

        <Route exact path='/shop/jackets'>
          <JacketPage/>
        </Route>

        <Route exact path='/shop/sneakers'>
          <SneakersPage/>
        </Route>

        <Route exact path='/shop/womens'>
          <WomenPage/>
        </Route>

        <Route exact path='/shop/mens'>
          <MenPage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
