import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Header} from '../common/header.js';
import {Tuner} from '../common/tuner.js';
import { Actions } from 'react-native-router-flux';
import {BackHandler} from 'react-native';
import { Audio } from 'expo';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            note: '',
            playing: false
        }
        this.audioPlayer = new Audio.Sound();
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {return true});
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => {return true});
    }

    gotoHome = () => {
        if(this.state.note !== ''){
            this.audioPlayer.stopAsync();
        }
        if(global.timeouts){
            global.timeouts.forEach(t => {
                clearTimeout(t);
            })
        }
        Actions.home()
    }

    playSound = async (note) => {
        try {
            await this.audioPlayer.unloadAsync();
            if(note === 'a1'){
                this.setState({note: 'a1', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/a-1.mp3'));
            }else if(note === 'a4'){
                this.setState({note: 'a4', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/a-4.mp3'));
            }else if(note === 'a#4'){
                this.setState({note: 'a#4', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/a-sharp-4.mp3'));
            }else if(note === 'b4'){
                this.setState({note: 'b4', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/b-4.mp3'));
            }else if(note === 'c0'){
                this.setState({note: 'c0', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/c-0.mp3'));
            }else if(note === 'c2'){
                this.setState({note: 'c2', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/c-2.mp3'));
            }else if(note === 'c3'){
                this.setState({note: 'c3', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/c-3.mp3'));
            }else if(note === 'c4'){
                this.setState({note: 'c4', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/c-4.mp3'));
            }else if(note === 'c5'){
                this.setState({note: 'c5', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/c-5.mp3'));
            }else if(note === 'c#2'){
                this.setState({note: 'c#2', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/c-sharp-2.mp3'));
            }else if(note === 'd0'){
                this.setState({note: 'd0', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/d-0.mp3'));
            }else if(note === 'd1'){
                this.setState({note: 'd1', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/d-1.mp3'));
            }else if(note === 'd2'){
                this.setState({note: 'd2', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/d-2.mp3'));
            }else if(note === 'd5'){
                this.setState({note: 'd5', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/d-5.mp3'));
            }else if(note === 'd#0'){
                this.setState({note: 'd#0', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/d-sharp-0.mp3'));
            }else if(note === 'd#5'){
                this.setState({note: 'd#5', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/d-sharp-5.mp3'));
            }else if(note === 'e0'){
                this.setState({note: 'e0', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/e-0.mp3'));
            }else if(note === 'e5'){
                this.setState({note: 'e5', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/e-5.mp3'));
            }else if(note === 'f1'){
                this.setState({note: 'f1', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/f-1.mp3'));
            }else if(note === 'f3'){
                this.setState({note: 'f3', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/f-3.mp3'));
            }else if(note === 'f#3'){
                this.setState({note: 'f#3', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/f-sharp-3.mp3'));
            }else if(note === 'g1'){
                this.setState({note: 'g1', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/g-1.mp3'));
            }else if(note === 'g3'){
                this.setState({note: 'g3', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/g-3.mp3'));
            }else if(note === 'g#1'){
                this.setState({note: 'g#1', playing: true});
                await this.audioPlayer.loadAsync(require('./audio/g-sharp-1.mp3'));
            }else{
                alert('Error: Audio does not exist');
            }

            await this.audioPlayer.setIsLoopingAsync(true);
            await this.audioPlayer.playAsync();
        } catch (err) {

        }
    }

    stopSound = async () => {
        this.setState({note: '', playing: false});
        await this.audioPlayer.stopAsync();
    }

    ifPlayingNote = (note) => {
        if(this.state.note === note && this.state.playing){
            return true;
        } else {
            return false;
        }
    }

	onPressButton = () => {
		alert('You Pressed The Button');
	}

    render(){
        let splitNotes = global.notes.split(',');
        let noteIndex = [];
        noteIndex.push(splitNotes[0] + '0');
        noteIndex.push(splitNotes[1] + '1');
        noteIndex.push(splitNotes[2] + '2');
        noteIndex.push(splitNotes[3] + '3');
        noteIndex.push(splitNotes[4] + '4');
        noteIndex.push(splitNotes[5] + '5');

        return(
            <View style={styles.Detail}>
                <Header title={global.description + ' Guitar Tuning'} showAbout={false} gotoHome={this.gotoHome}/>
				<Tuner notes={noteIndex} />
                <View style={styles.Fret}>
                    <Image style={styles.Fret} source={require('./images/fret2.jpg')} />
						<View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
							<Text style={this.ifPlayingNote(noteIndex[0]) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(noteIndex[0]) ? this.stopSound() : this.playSound(noteIndex[0])}>{splitNotes[0].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(noteIndex[1]) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(noteIndex[1]) ? this.stopSound() : this.playSound(noteIndex[1])}>{splitNotes[1].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(noteIndex[2]) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(noteIndex[2]) ? this.stopSound() : this.playSound(noteIndex[2])}>{splitNotes[2].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(noteIndex[3]) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(noteIndex[3]) ? this.stopSound() : this.playSound(noteIndex[3])}>{splitNotes[3].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(noteIndex[4]) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(noteIndex[4]) ? this.stopSound() : this.playSound(noteIndex[4])}>{splitNotes[4].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(noteIndex[5]) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(noteIndex[5]) ? this.stopSound() : this.playSound(noteIndex[5])}>{splitNotes[5].toUpperCase()}</Text>
						</View>
                </View>
				<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
					<Text style={styles.BottomText}>Click on a NOTE to hear that note played</Text>
					<Text style={styles.BottomText}>on a loop. Click it again to stop the loop.</Text>
					<Text style={styles.BottomText}></Text>
					<Text style={styles.BottomText}>Click on TUNE for each note to be played</Text>
                    <Text style={styles.BottomText}>five times. Click it again to stop the tuning cycle.</Text>
				</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Detail: {
        backgroundColor: '#e6e6e6',
        height: 1500,

    },
    Fret: {
        marginTop: -15,
        justifyContent: 'center',
        alignItems: 'center'
    },
	Stopped: {
		bottom: 175,
		width: 35,
		textAlign: 'center',
		fontWeight: 'bold',
		height: 50,
		fontSize: 23,
		color: '#FFFFFF',
    },
    Playing: {
		bottom: 175,
		width: 35,
		textAlign: 'center',
		fontWeight: 'bold',
		height: 50,
		fontSize: 23,
		color: '#0d47a1',
	},
	Button: {
        marginTop: 25,
		bottom: 3,
		height: 35,
		width: 100,
		borderRadius: 10,
	},
	ButtonText: {
		bottom: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		height: 50,
		fontSize: 16,
		color: '#FFFFFF',
	},
	BottomText: {
		top: -420,
		fontWeight: 'bold',
		fontSize: 17,
        fontSize: 15,
	}
});

export {Detail};
