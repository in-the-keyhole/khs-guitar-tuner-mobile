import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Header} from 'components/common/header.js';
import {Strum} from 'components/common/strum.js';
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
        if(this.state.note !== ''){
            this.audioPlayer.stopAsync();
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
        let note0 = splitNotes[0] + '0';
        let note1 = splitNotes[1] + '1';
        let note2 = splitNotes[2] + '2';
        let note3 = splitNotes[3] + '3';
        let note4 = splitNotes[4] + '4';
        let note5 = splitNotes[5] + '5';

        return(
            <View style={styles.Detail}>
                <Header title={global.description + ' Guitar Tuning'} showAbout={false} gotoHome={this.gotoHome}/>
				<Strum notes={splitNotes} />
                <View style={styles.Fret}>
                    <Image style={styles.Fret} source={require('./images/fret2.jpg')} />
						<View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
							<Text style={this.ifPlayingNote(note0) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(note0) ? this.stopSound() : this.playSound(note0)}>{splitNotes[0].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(note1) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(note1) ? this.stopSound() : this.playSound(note1)}>{splitNotes[1].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(note2) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(note2) ? this.stopSound() : this.playSound(note2)}>{splitNotes[2].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(note3) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(note3) ? this.stopSound() : this.playSound(note3)}>{splitNotes[3].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(note4) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(note4) ? this.stopSound() : this.playSound(note4)}>{splitNotes[4].toUpperCase()}</Text>
							<Text style={this.ifPlayingNote(note5) ? styles.Playing : styles.Stopped} onPress={() => this.ifPlayingNote(note5) ? this.stopSound() : this.playSound(note5)}>{splitNotes[5].toUpperCase()}</Text>
						</View>
                </View>
				<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
					<Text style={styles.BottomText}>Click on a SINGLE NOTE to hear that note played</Text>
					<Text style={styles.BottomText}>on a loop. Click it again to stop the loop.</Text>
					<Text style={styles.BottomText}></Text>
					<Text style={styles.BottomText}>Click on STRUM to hear all six notes played</Text>
					<Text style={styles.BottomText}>in a single strum.</Text>
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
        marginTop: -15,
        justifyContent: 'center',
        alignItems: 'center'
    },
	Stopped: {
		bottom: 175,
		width: 35,
		textAlign: 'center',
		fontWeight: 'bold',
		height: 100,
		fontSize: 23,
		color: COLORS.WHITE.WHITE,
    },
    Playing: {
		bottom: 175,
		width: 35,
		textAlign: 'center',
		fontWeight: 'bold',
		height: 100,
		fontSize: 23,
		color: COLORS.BLUE.BLUE,
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
		color: COLORS.WHITE.WHITE,
	},
	BottomText: {
		top: -50,
		fontWeight: 'bold',
		fontSize: 17,
        fontSize: 15,
        top: -50
	}
});

export {Detail};
