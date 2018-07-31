import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux'
import {Home} from 'components/screens/home-screen.js';
import {About} from 'components/screens/about-screen.js';
import {Detail} from 'components/screens/detail-screen.js';
import { AsyncStorage, NetInfo } from "react-native"

class Routes extends React.Component {
    constructor(props){
        super(props);
        this.state ={ 
            descriptions: [],
			notes: []
        }
    }
    componentWillMount() {
		NetInfo.getConnectionInfo().then((connectionInfo) => {
		if(connectionInfo.type !== 'none') {
        fetch( 'http://www.khsguitartuner.com/api-tunings' )
            .then( results => { return results.json(); } )
            .then( data => {
				AsyncStorage.setItem('tunings', JSON.stringify(data._embedded.tunings));
            } )
            .catch(( error ) => { console.log( error ) } );
		}
		});
			
			this.getData();
		
    }

    myHome = () => {
        return(
            <Home descriptions={this.state.descriptions} notes={this.state.notes} />
        );
    }

    myDetail = () =>  {
        return(
            <Detail descriptions={this.state.descriptions} notes={this.state.notes} />
        );
    }
	
	getData = () => {
		let jsonDescription = [];
		let jsonNotes = [];
		let buffer = [];
		 AsyncStorage.getItem('tunings')
		 .then(req => {
			 let json = JSON.parse(req);
			 json.map((t) => {
				 jsonDescription.push(t.description);
				 jsonNotes.push(t.notes);
				
				buffer = [];
			 })
			this.setState({descriptions: jsonDescription});
			this.setState({notes: jsonNotes});
		 })
		 
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