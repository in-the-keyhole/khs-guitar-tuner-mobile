import React from 'react';
import { Image, View, StyleSheet, Text, Button } from 'react-native';
import {Header} from 'components/common/header.js';
import { Actions } from 'react-native-router-flux';
import {COLORS} from 'constants/styles.js';
import { Audio } from 'expo';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            tunings: this.props.tunings,
        }
        this.audioPlayer = new Audio.Sound();
    }

    gotoHome = () => {
        Actions.home()
    }

    playSound = async (note) => {
        await this.audioPlayer.unloadAsync();
        if(note === 'e0'){
            await this.audioPlayer.loadAsync(require('./audio/e-0.mp3'));
        }
        await this.audioPlayer.loadAsync(require('./audio/e-0.mp3'));
        await this.audioPlayer.setIsLoopingAsync(true);
        await this.audioPlayer.playAsync();
        
    }

    stopSound = async () => {
        await this.audioPlayer.stopAsync();
    }

    render(){
        let splitNotes = global.notes.split(',');
        let note0 = splitNotes[0] + '0';
        let note1 = splitNotes[1] + '1';
        let note2 = splitNotes[2] + '2';
        let note3 = splitNotes[3] + '3';
        let note4 = splitNotes[4] + '4';
        let note5 = splitNotes[5] + '5';

        return(
            <View style={styles.Detail}>
                <Header title={global.description + ' Guitar Tuning'} showAbout={false} gotoHome={this.gotoHome} />
                <Button onPress={() => this.playSound(note0)} title={'Play'}/>
                <Button onPress={() => this.stopSound()} title={'Stop'}/>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
	Text: {
		width: 35,
		textAlign: 'center',
		fontWeight: 'bold',
		height: 450,
		fontSize: 23,
		color: 'rgb(255,255,255)',
	},
});

export {Detail};