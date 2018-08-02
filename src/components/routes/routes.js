import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import {Home} from '../screens/home-screen.js';
import {About} from '../screens/about-screen.js';
import {Detail} from '../screens/detail-screen.js';
import { TUNINGS } from '../common/constants/tunings.js';

class Routes extends React.Component {

    myHome = () => {
        return(
            <Home tunings={TUNINGS} />
        );
    }

    myDetail = () =>  {
        return(
            <Detail />
        );
    }

    render(){
        return(
            <Router >
                <Scene key = "root" gesturesEnabled={false}>
                    <Scene key = "home" component = {this.myHome} title = "Home" initial = {true} hideNavBar={true}/>
                    <Scene key = "about" component = {About} title = "About" hideNavBar={true}/>
                    <Scene key = "detail" component = {this.myDetail} title = "Detail" hideNavBar={true}/>
                </Scene>
            </Router>
        );
    }
    
}
export {Routes};