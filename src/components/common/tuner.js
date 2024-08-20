import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Audio } from 'expo-av';

class Tuner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
        };
        this.tuner = null;
         global.timeouts = [];
    }

loadAndPlayAudio = async (index) => {
    try {
        if (this.tuner) {
            const status = await this.tuner.getStatusAsync();
            if (status.isLoaded) {
                await this.tuner.unloadAsync();
            }
        }

        this.tuner = new Audio.Sound();

        let audioLoaded = false;

        switch (this.props.notes[index]) {
                case 'c0':
                    await this.tuner.loadAsync(require('../screens/audio/c-0.mp3'));
                    audioLoaded = true;
                    break;
                case 'd0':
                    await this.tuner.loadAsync(require('../screens/audio/d-0.mp3'));
                    audioLoaded = true;
                    break;
                case 'd#0':
                    await this.tuner.loadAsync(require('../screens/audio/d-sharp-0.mp3'));
                    audioLoaded = true;
                    break;
                case 'e0':
                    await this.tuner.loadAsync(require('../screens/audio/e-0.mp3'));
                    audioLoaded = true;
                    break;
                case 'a1':
                    await this.tuner.loadAsync(require('../screens/audio/a-1.mp3'));
                    audioLoaded = true;
                    break;
                case 'd1':
                    await this.tuner.loadAsync(require('../screens/audio/d-1.mp3'));
                    audioLoaded = true;
                    break;
                case 'f1':
                    await this.tuner.loadAsync(require('../screens/audio/f-1.mp3'));
                    audioLoaded = true;
                    break;
                case 'g1':
                    await this.tuner.loadAsync(require('../screens/audio/g-1.mp3'));
                    audioLoaded = true;
                    break;
                case 'g#1':
                    await this.tuner.loadAsync(require('../screens/audio/g-sharp-1.mp3'));
                    audioLoaded = true;
                    break;
                case 'c2':
                    await this.tuner.loadAsync(require('../screens/audio/c-2.mp3'));
                    audioLoaded = true;
                    break;
                case 'c#2':
                    await this.tuner.loadAsync(require('../screens/audio/c-sharp-2.mp3'));
                    audioLoaded = true;
                    break;
                case 'd2':
                    await this.tuner.loadAsync(require('../screens/audio/d-2.mp3'));
                    audioLoaded = true;
                    break;
                case 'c3':
                    await this.tuner.loadAsync(require('../screens/audio/c-3.mp3'));
                    audioLoaded = true;
                    break;
                case 'f3':
                    await this.tuner.loadAsync(require('../screens/audio/f-3.mp3'));
                    audioLoaded = true;
                    break;
                case 'f#3':
                    await this.tuner.loadAsync(require('../screens/audio/f-sharp-3.mp3'));
                    audioLoaded = true;
                    break;
                case 'g3':
                    await this.tuner.loadAsync(require('../screens/audio/g-3.mp3'));
                    audioLoaded = true;
                    break;
                case 'a4':
                    await this.tuner.loadAsync(require('../screens/audio/a-4.mp3'));
                    audioLoaded = true;
                    break;
                case 'a#4':
                    await this.tuner.loadAsync(require('../screens/audio/a-sharp-4.mp3'));
                    audioLoaded = true;
                    break;
                case 'b4':
                    await this.tuner.loadAsync(require('../screens/audio/b-4.mp3'));
                    audioLoaded = true;
                    break;
                case 'c4':
                    await this.tuner.loadAsync(require('../screens/audio/c-4.mp3'));
                    audioLoaded = true;
                    break;
                case 'c5':
                    await this.tuner.loadAsync(require('../screens/audio/c-5.mp3'));
                    audioLoaded = true;
                    break;
                case 'd5':
                    await this.tuner.loadAsync(require('../screens/audio/d-5.mp3'));
                    audioLoaded = true;
                    break;
                case 'd#5':
                    await this.tuner.loadAsync(require('../screens/audio/d-sharp-5.mp3'));
                    audioLoaded = true;
                    break;
                case 'e5':
                    await this.tuner.loadAsync(require('../screens/audio/e-5.mp3'));
                    audioLoaded = true;
                    break;
                default:
                    alert('Error: Audio at index ' + index + ' does not exist');
                    break;
            }

            if (audioLoaded) {
                await this.tuner.setIsLoopingAsync(true);
                await this.tuner.playAsync();
            }
        } catch (err) {
            alert(`Error playing audio: ${err.message}`);
        }
    }

    manageAudio = async () => {
        global.timeouts = global.timeouts || [];
        this.setState({ playing: true });

        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(0), 1));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(0), 3500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(0), 7000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(0), 10500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(0), 14000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(1), 17500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(1), 21000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(1), 24500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(1), 28000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(1), 31500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(2), 35000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(2), 38500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(2), 42000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(2), 45500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(2), 49000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(3), 52500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(3), 56000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(3), 59500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(3), 63000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(3), 66500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(4), 70000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(4), 73500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(4), 77000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(4), 80500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(4), 84000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(5), 87500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(5), 91000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(5), 94500));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(5), 98000));
        global.timeouts.push(setTimeout(() => this.loadAndPlayAudio(5), 101500));
        global.timeouts.push(setTimeout(this.stopTune, 105000));
    }

stopTune = async () => {
  try {
    global.timeouts.forEach(t => clearTimeout(t));
    global.timeouts = [];

    this.setState({ playing: false });

    if (this.tuner) {
      const status = await this.tuner.getStatusAsync();
      if (status.isLoaded) {
        await this.tuner.stopAsync();
        await this.tuner.unloadAsync();
      }
    }
  } catch (err) {
    console.error(`Error stopping audio: ${err.message}`);
  }
}

componentWillUnmount() {
  this.stopTune();
}


    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.state.playing ? this.stopTune : this.manageAudio}>
                    <Image style={styles.Button} source={require('../screens/images/button.png')} />
                    <Text style={styles.ButtonText}>Tune</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});

export { Tuner };
