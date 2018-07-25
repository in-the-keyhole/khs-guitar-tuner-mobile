import React from 'react';
import { Image, View, StyleSheet, Text, ImageBackground } from 'react-native';
import {Header} from 'components/common/header.js';
import { Actions } from 'react-native-router-flux';
import {COLORS} from 'constants/styles.js';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            tunings: this.props.tunings,
        }
    }

    gotoHome = () => {
        Actions.home()
    }

    render(){
		let splitNotes = global.notes.split(',');
        return(
            <View style={styles.Detail}>
                <Header title={global.description + ' Guitar Tuning'} showAbout={false} gotoHome={this.gotoHome} />
                <View style={styles.Fret}>
                    <Image style={styles.Fret} source={require('./images/fret2.jpg')} />
						<View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
							<Text style={styles.Text}>{splitNotes[0].toUpperCase()}</Text>
							<Text style={styles.Text}>{splitNotes[1].toUpperCase()}</Text>
							<Text style={styles.Text}>{splitNotes[2].toUpperCase()}</Text>
							<Text style={styles.Text}>{splitNotes[3].toUpperCase()}</Text>
							<Text style={styles.Text}>{splitNotes[4].toUpperCase()}</Text>
							<Text style={styles.Text}>{splitNotes[5].toUpperCase()}</Text>
						</View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Detail: {
        backgroundColor: COLORS.WHITE.OFFSET,
        height: 800,
        
    },
    Fret: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
	Text: {
		width: 35,
		textAlign: 'center',
		fontWeight: 'bold',
		height: 450,
		fontSize: 30,
		color: 'rgb(255,255,255)',
	},
});

export {Detail};