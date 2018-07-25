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
            note: '',
            playing: false
        }
        this.audioPlayer = new Audio.Sound();
    }

    gotoHome = () => {
        Actions.home()
    }

    playSound = async (note) => {
        await this.audioPlayer.unloadAsync();
        if(note === 'a1'){
            await this.audioPlayer.loadAsync(require('./audio/a-1.mp3'));
        }else if(note === 'a4'){
            await this.audioPlayer.loadAsync(require('./audio/a-4.mp3'));
        }else if(note === 'a#4'){
            await this.audioPlayer.loadAsync(require('./audio/a-sharp-4.mp3'));
        }else if(note === 'b4'){
            await this.audioPlayer.loadAsync(require('./audio/b-4.mp3'));
        }else if(note === 'c0'){
            await this.audioPlayer.loadAsync(require('./audio/c-0.mp3'));
        }else if(note === 'c2'){
            await this.audioPlayer.loadAsync(require('./audio/c-2.mp3'));
        }else if(note === 'c3'){
            await this.audioPlayer.loadAsync(require('./audio/c-3.mp3'));
        }else if(note === 'c4'){
            await this.audioPlayer.loadAsync(require('./audio/c-4.mp3'));
        }else if(note === 'c5'){
            await this.audioPlayer.loadAsync(require('./audio/c-5.mp3'));
        }else if(note === 'c#2'){
            await this.audioPlayer.loadAsync(require('./audio/c-sharp-2.mp3'));
        }else if(note === 'd0'){
            await this.audioPlayer.loadAsync(require('./audio/d-0.mp3'));
        }else if(note === 'd1'){
            await this.audioPlayer.loadAsync(require('./audio/d-1.mp3'));
        }else if(note === 'd2'){
            await this.audioPlayer.loadAsync(require('./audio/d-2.mp3'));
        }else if(note === 'd5'){
            await this.audioPlayer.loadAsync(require('./audio/d-5.mp3'));
        }else if(note === 'd#0'){
            await this.audioPlayer.loadAsync(require('./audio/d-sharp-0.mp3'));
        }else if(note === 'd#5'){
            await this.audioPlayer.loadAsync(require('./audio/d-sharp-5.mp3'));
        }else if(note === 'e0'){
            this.setState({note: 'e0'});
            await this.audioPlayer.loadAsync(require('./audio/e-0.mp3'));
        }else if(note === 'e5'){
            await this.audioPlayer.loadAsync(require('./audio/e-5.mp3'));
        }else if(note === 'f1'){
            await this.audioPlayer.loadAsync(require('./audio/f-1.mp3'));
        }else if(note === 'f3'){
            await this.audioPlayer.loadAsync(require('./audio/f-3.mp3'));
        }else if(note === 'f#3'){
            await this.audioPlayer.loadAsync(require('./audio/f-sharp-3.mp3'));
        }else if(note === 'g1'){
            await this.audioPlayer.loadAsync(require('./audio/g-1.mp3'));
        }else if(note === 'g3'){
            await this.audioPlayer.loadAsync(require('./audio/g-3.mp3'));
        }else if(note === 'g#1'){
            await this.audioPlayer.loadAsync(require('./audio/g-sharp-1.mp3'));
        }

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
                <Button onPress={() => this.stopSound()} title={'Stop'}/>
                <View style={styles.Fret}>
                    <Image style={styles.Fret} source={require('./images/fret2.jpg')} />
						<View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
							<Text style={styles.Text} onPress={() => this.playSound(note0)}>{splitNotes[0].toUpperCase()}</Text>
							<Text style={styles.Text} onPress={() => this.playSound(note1)}>{splitNotes[1].toUpperCase()}</Text>
							<Text style={styles.Text} onPress={() => this.playSound(note2)}>{splitNotes[2].toUpperCase()}</Text>
							<Text style={styles.Text} onPress={() => this.playSound(note3)}>{splitNotes[3].toUpperCase()}</Text>
							<Text style={styles.Text} onPress={() => this.playSound(note4)}>{splitNotes[4].toUpperCase()}</Text>
							<Text style={styles.Text} onPress={() => this.playSound(note5)}>{splitNotes[5].toUpperCase()}</Text>
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