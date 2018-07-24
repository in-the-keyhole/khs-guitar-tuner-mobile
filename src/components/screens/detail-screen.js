import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
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
					<Text style={styles.Text1}>{splitNotes[0]}</Text>
					<Text style={styles.Text2}>{splitNotes[1]}</Text>
					<Text style={styles.Text3}>{splitNotes[2]}</Text>
					<Text style={styles.Text4}>{splitNotes[3]}</Text>
					<Text style={styles.Text5}>{splitNotes[4]}</Text>
					<Text style={styles.Text6}>{splitNotes[5]}</Text>
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
	Text1: {
		position: 'absolute',
		top: 200,
		left: 100,
		fontSize: 50,
		marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
		color: 'rgb(255,255,255)',
	},
	Text2: {
		position: 'absolute',
		top: 200,
		left: 140,
		fontSize: 50,
		marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
		color: 'rgb(255,255,255)',
	},
	Text3: {
		position: 'absolute',
		top: 200,
		left: 175,
		fontSize: 50,
		marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
		color: 'rgb(255,255,255)',
	},
	Text4: {
		position: 'absolute',
		top: 200,
		left: 210,
		fontSize: 50,
		marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
		color: 'rgb(255,255,255)',
	},
	Text5: {
		position: 'absolute',
		top: 200,
		left: 250,
		fontSize: 50,
		marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
		color: 'rgb(255,255,255)',
	},
	Text6: {
		position: 'absolute',
		top: 200,
		left: 290,
		fontSize: 50,
		marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
		color: 'rgb(255,255,255)',
	}
});

export {Detail};