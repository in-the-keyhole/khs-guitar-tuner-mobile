import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import {Home} from 'components/screens/home-screen.js';
import {About} from 'components/screens/about-screen.js';
import {Detail} from 'components/screens/detail-screen.js';

const Routes = () => (
    <Router >
       <Scene key = "root">
          <Scene key = "home" component = {Home} title = "Home" initial = {true} hideNavBar={true}/>
          <Scene key = "about" component = {About} title = "About" hideNavBar={true}/>
          <Scene key = "detail" component = {Detail} title = "Detail" hideNavBar={true}/>
       </Scene>
    </Router>
 )
 export {Routes};