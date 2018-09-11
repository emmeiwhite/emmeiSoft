import React from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './app/views/Home';
import Contact from './app/views/Contact';

// Now we need to set, how our app starts. We'll create different routes!!!
// We need to supply our application with "ROUTE CONFIGURATION":
// StackNavigator is a Function which returns the another Component.
// IDEA BEHIND USING StackNavigator:Any Component added in StackNavigator //Object will  have the access to the navigation props.[this.props.navigation()]


// LET'S Provide ROUTE CONFIGURATION:

const MyRoutes = StackNavigator({
  HomeRT:{
    screen:Home
  },
  ContactRT:{
    screen:Contact
  }
},
  initialRouteName:'HomeRT'
);



export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}
