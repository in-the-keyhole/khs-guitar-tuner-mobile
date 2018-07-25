import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux'
import {Home} from 'components/screens/home-screen.js';
import {About} from 'components/screens/about-screen.js';
import {Detail} from 'components/screens/detail-screen.js';

class Routes extends React.Component {
    constructor(props){
        super(props);
        this.state ={ 
            tunings: [],
        }
    }
    componentWillMount() {
        fetch( 'http://www.khsguitartuner.com/api-tunings' )
            .then( results => { return results.json(); } )
            .then( data => {
                this.setState( { tunings: data._embedded.tunings } );
            } )
            .catch(( error ) => { console.log( error ) } );
    }

    myHome = () => {
        return(
            <Home tunings={this.state.tunings} />
        );
    }

    myDetail = () =>  {
        return(
            <Detail tunings={this.state.tunings} />
        );
    }

    render(){
        return(
            <Router >
                <Scene key = "root">
                    <Scene key = "home" component = {this.myHome} title = "Home" initial = {true} hideNavBar={true}/>
                    <Scene key = "about" component = {About} title = "About" hideNavBar={true}/>
                    <Scene key = "detail" component = {this.myDetail} title = "Detail" hideNavBar={true}/>
                </Scene>
            </Router>
        );
    }
    
}
 export {Routes};