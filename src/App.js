import React from 'react';
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import {auth} from './firebase/firebase.utils'



import {Switch, Route} from 'react-router-dom'



class App extends React.Component {

  constructor () {
    super()
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth() {
   return null; 
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState ({ currentUser : user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render () {
    return (
      <div>
        <Header currentUser = { this.state.currentUser } />
        
        <Switch>
  
          <Route exact path='/'>
            <HomePage/>
          </Route>
  
          <Route path='/shop'>
            <Shop/>
          </Route>
  
          <Route path='/signin'>
            <SignInAndSignUp/>
          </Route>
  
          
        </Switch>
      </div>
    );
  }
}

export default App;
