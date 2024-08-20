import React from 'react';
import { Router, Scene, Stack } from '@react-navigation/native';
import { Home } from '../screens/home-screen.js';
import { About } from '../screens/about-screen.js';
import { Detail } from '../screens/detail-screen.js';

export const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="about" component={About} title="About" />
      <Scene key="detail" component={Detail} title="Detail" />
    </Stack>
  </Router>
);