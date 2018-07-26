import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Audio } from 'expo';
import {COLORS} from 'constants/styles.js';

class Strum extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note: false,
        }
        this.tune0 = new Audio.Sound();
        this.tune1 = new Audio.Sound();
        this.tune2 = new Audio.Sound();
        this.tune3 = new Audio.Sound();
        this.tune4 = new Audio.Sound();
        this.tune5 = new Audio.Sound();
    }

    playTune = async () => {
        let notes = this.props.notes;

        try{
            if(this.state.note === true){
                await this.tune0.unloadAsync();
                await this.tune1.unloadAsync();
                await this.tune2.unloadAsync();
                await this.tune3.unloadAsync();
                await this.tune4.unloadAsync();
                await this.tune5.unloadAsync();
            }
            this.setState({note: true});

            if(notes[0] == 'c'){
                await this.tune0.loadAsync(require('../screens/audio/c-0.mp3'));
            } else if (notes[0] == 'd'){
                await this.tune0.loadAsync(require('../screens/audio/d-0.mp3'));
            } else if (notes[0] == 'd#'){
                await this.tune0.loadAsync(require('../screens/audio/d-sharp-0.mp3'));
            } else if (notes[0] == 'e') {
                await this.tune0.loadAsync(require('../screens/audio/e-0.mp3'));
            } else {
                alert('Error: Audio at index 0 does not exist');
            }

            if(notes[1] == 'a'){
                await this.tune1.loadAsync(require('../screens/audio/a-1.mp3'));
            } else if (notes[1] == 'd'){
                await this.tune1.loadAsync(require('../screens/audio/d-1.mp3'));
            } else if (notes[1] == 'f'){
                await this.tune1.loadAsync(require('../screens/audio/f-1.mp3'));
            } else if (notes[1] == 'g'){
                await this.tune1.loadAsync(require('../screens/audio/g-1.mp3'));
            } else if (notes[1] == 'g#'){
                await this.tune1.loadAsync(require('../screens/audio/g-sharp-1.mp3'));
            } else {
                alert('Error: Audio at index 1 does not exist');
            }
            
            if(notes[2] == 'c'){
                await this.tune2.loadAsync(require('../screens/audio/c-2.mp3'));
            } else if (notes[2] == 'c#'){
                await this.tune2.loadAsync(require('../screens/audio/c-sharp-2.mp3'));
            } else if (notes[2] == 'd'){
                await this.tune2.loadAsync(require('../screens/audio/d-2.mp3'));
            } else {
                alert('Error: Audio at index 2 does not exist');
            }

            if(notes[3] == 'c'){
                await this.tune3.loadAsync(require('../screens/audio/c-3.mp3'));
            } else if (notes[3] == 'f'){
                await this.tune3.loadAsync(require('../screens/audio/f-3.mp3'));
            } else if (notes[3] == 'f#'){
                await this.tune3.loadAsync(require('../screens/audio/f-sharp-3.mp3'));
            } else if (notes[3] == 'g'){
                await this.tune3.loadAsync(require('../screens/audio/g-3.mp3'));
            } else {
                alert('Error: Audio at index 3 does not exist');
            }

            if(notes[4] == 'a'){
                await this.tune4.loadAsync(require('../screens/audio/a-4.mp3'));
            } else if (notes[4] == 'a#'){
                await this.tune4.loadAsync(require('../screens/audio/a-sharp-4.mp3'));
            } else if (notes[4] == 'b'){
                await this.tune4.loadAsync(require('../screens/audio/b-4.mp3'));
            } else if (notes[4] == 'c'){
                await this.tune4.loadAsync(require('../screens/audio/c-4.mp3'));
            } else {
                alert('Error: Audio at index 4 does not exist');
            }

            if(notes[5] == 'c') {
                await this.tune5.loadAsync(require('../screens/audio/c-5.mp3'));
            } else if (notes[5] == 'd'){
                await this.tune5.loadAsync(require('../screens/audio/d-5.mp3'));
            } else if (notes[5] == 'd#'){
                await this.tune5.loadAsync(require('../screens/audio/d-sharp-5.mp3'));
            } else if (notes[5] == 'e'){
                await this.tune5.loadAsync(require('../screens/audio/e-5.mp3'));
            } else {
                alert('Error: Audio at index 5 does not exist');
            }
            await this.tune0.playAsync();
            await this.tune1.playAsync();
            await this.tune2.playAsync();
            await this.tune3.playAsync();
            await this.tune4.playAsync();
            await this.tune5.playAsync();
        } catch (err){
            alert(err);
        }
    }

    manageTune = async() => {
        this.playTune();
    }

    render(){
        return(
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
					<TouchableOpacity onPress={this.manageTune}>
						<Image style={styles.Button} source={require('../screens/images/button.png')}/>
						<Text style={styles.ButtonText}>Strum</Text>
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
		color: COLORS.WHITE.WHITE,
	},
})

export {Strum};