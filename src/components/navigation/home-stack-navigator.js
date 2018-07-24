import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home } from 'components/screens/home-screen.js';
import { About } from 'components/screens/about-screen.js';

const HomeStackNavigator = StackNavigator(
    {
      Main: { screen: Home },
      ShowAbout: { screen: About },
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
    },
  );
  
  export default HomeStackNavigator;