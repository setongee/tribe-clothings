import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import {auth, createUserProfile} from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'




class App extends React.Component {

  unsubscribeFromAuth = null; 
  
  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      if (user) {
        
        const userRef = await createUserProfile(user);
     
        userRef.onSnapshot(snap => {
          
          setCurrentUser({

              id : snap.id,
              ...snap.data()

            })

           });
                
      } else {

        setCurrentUser(user);

      }
    })
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render () {
    return (
      <div>
        

        <Header/>
        
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
