import React, { useEffect, useCallback, useState, useRef } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../common/header';
import { Tuner } from '../common/tuner';
import { BackHandler } from 'react-native';
import { Audio } from 'expo-av';
import GestureRecognizer from 'react-native-swipe-gestures';

const Detail = () => {
  const navigation = useNavigation();
  const [currentNote, setCurrentNote] = useState('');
  const audioPlayer = useRef(new Audio.Sound());
  const [isSoundLoaded, setIsSoundLoaded] = useState(false);

const stopSound = useCallback(async () => {
  try {
    const status = await audioPlayer.current.getStatusAsync();
    if (status.isLoaded) {
      await audioPlayer.current.stopAsync();
      await audioPlayer.current.unloadAsync();
      setCurrentNote('');
      setIsSoundLoaded(false);
    }
  } catch (err) {
    console.error(`Error stopping audio: ${err.message}`);
  }
}, []);


  const gotoHome = useCallback(async () => {
    await stopSound();
    navigation.navigate('Home');
  }, [stopSound, navigation]);

  useEffect(() => {
    const backHandlerListener = BackHandler.addEventListener('hardwareBackPress', () => {
      gotoHome();
      return true;
    });

    const unsubscribe = navigation.addListener('beforeRemove', () => {
      gotoHome();
    });

    return () => {
      stopSound();
      backHandlerListener.remove();
      unsubscribe();
    };
  }, [gotoHome, navigation, stopSound]);

  const playSound = async (note) => {
  try {
    if (currentNote) {
      await stopSound();
    }

      if (isSoundLoaded) {
        await audioPlayer.current.unloadAsync();
      }

    if (!audioPlayer.current) {
      audioPlayer.current = new Audio.Sound();
    }

    let audioLoaded = false;

    switch (note) {
      case 'a1':
        await audioPlayer.current.loadAsync(require('../screens/audio/a-1.mp3'));
        audioLoaded = true;
        break;
      case 'a4':
        await audioPlayer.current.loadAsync(require('../screens/audio/a-4.mp3'));
        audioLoaded = true;
        break;
      case 'a#4':
        await audioPlayer.current.loadAsync(require('../screens/audio/a-sharp-4.mp3'));
        audioLoaded = true;
        break;
      case 'b4':
        await audioPlayer.current.loadAsync(require('../screens/audio/b-4.mp3'));
        audioLoaded = true;
        break;
      case 'c0':
        await audioPlayer.current.loadAsync(require('../screens/audio/c-0.mp3'));
        audioLoaded = true;
        break;
      case 'c2':
        await audioPlayer.current.loadAsync(require('../screens/audio/c-2.mp3'));
        audioLoaded = true;
        break;
      case 'c3':
        await audioPlayer.current.loadAsync(require('../screens/audio/c-3.mp3'));
        audioLoaded = true;
        break;
      case 'c4':
        await audioPlayer.current.loadAsync(require('../screens/audio/c-4.mp3'));
        audioLoaded = true;
        break;
      case 'c5':
        await audioPlayer.current.loadAsync(require('../screens/audio/c-5.mp3'));
        audioLoaded = true;
        break;
      case 'c#2':
        await audioPlayer.current.loadAsync(require('../screens/audio/c-sharp-2.mp3'));
        audioLoaded = true;
        break;
      case 'd0':
        await audioPlayer.current.loadAsync(require('../screens/audio/d-0.mp3'));
        audioLoaded = true;
        break;
      case 'd1':
        await audioPlayer.current.loadAsync(require('../screens/audio/d-1.mp3'));
        audioLoaded = true;
        break;
      case 'd2':
        await audioPlayer.current.loadAsync(require('../screens/audio/d-2.mp3'));
        audioLoaded = true;
        break;
      case 'd5':
        await audioPlayer.current.loadAsync(require('../screens/audio/d-5.mp3'));
        audioLoaded = true;
        break;
      case 'd#0':
        await audioPlayer.current.loadAsync(require('../screens/audio/d-sharp-0.mp3'));
        audioLoaded = true;
        break;
      case 'd#5':
        await audioPlayer.current.loadAsync(require('../screens/audio/d-sharp-5.mp3'));
        audioLoaded = true;
        break;
      case 'e0':
        await audioPlayer.current.loadAsync(require('../screens/audio/e-0.mp3'));
        audioLoaded = true;
        break;
      case 'e5':
        await audioPlayer.current.loadAsync(require('../screens/audio/e-5.mp3'));
        audioLoaded = true;
        break;
      case 'f1':
        await audioPlayer.current.loadAsync(require('../screens/audio/f-1.mp3'));
        audioLoaded = true;
        break;
      case 'f3':
        await audioPlayer.current.loadAsync(require('../screens/audio/f-3.mp3'));
        audioLoaded = true;
        break;
      case 'f#3':
        await audioPlayer.current.loadAsync(require('../screens/audio/f-sharp-3.mp3'));
        audioLoaded = true;
        break;
      case 'g1':
        await audioPlayer.current.loadAsync(require('../screens/audio/g-1.mp3'));
        audioLoaded = true;
        break;
      case 'g3':
        await audioPlayer.current.loadAsync(require('../screens/audio/g-3.mp3'));
        audioLoaded = true;
        break;
      case 'g#1':
        await audioPlayer.current.loadAsync(require('../screens/audio/g-sharp-1.mp3'));
        audioLoaded = true;
        break;
      default:
        alert('Error: Audio for this note does not exist');
        return;
    }

    if (audioLoaded) {
      setIsSoundLoaded(true);
      setCurrentNote(note);
      await audioPlayer.current.setIsLoopingAsync(true);
      await audioPlayer.current.playAsync();
    }
  } catch (err) {
    console.error(`Error playing audio: ${err.message}`);
  }
};



  const handleNotePress = (note) => {
    if (note === currentNote) {
      stopSound();
    } else {
      playSound(note);
    }
  };

  const splitNotes = global.notes.split(',');
  const noteIndex = [
    `${splitNotes[0]}0`,
    `${splitNotes[1]}1`,
    `${splitNotes[2]}2`,
    `${splitNotes[3]}3`,
    `${splitNotes[4]}4`,
    `${splitNotes[5]}5`,
  ];

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer onSwipe={gotoHome} config={config}>
      <View style={styles.Detail}>
        <Header title={`${global.description} Guitar Tuning`} showAbout={false} gotoHome={gotoHome} />
        <Tuner notes={noteIndex} />
        <View style={styles.Fret}>
          <Image style={styles.Fret} source={require('./images/fret2.jpg')} />
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            {splitNotes.map((note, index) => (
              <Text
                key={index}
                style={currentNote === noteIndex[index] ? styles.Playing : styles.Stopped}
                onPress={() => handleNotePress(noteIndex[index])}>
                {note.toUpperCase()}
              </Text>
            ))}
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.BottomText}>Click on a NOTE to hear that note played on a loop. Click it again to stop the loop.</Text>
          <Text style={styles.BottomText}></Text>
          <Text style={styles.BottomText}>Click on TUNE for each note to be played five times. Click it again to stop the tuning cycle.</Text>
        </View>
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  Detail: {
    backgroundColor: '#e6e6e6',
    height: 1500,
  },
  Fret: {
    marginTop: -15,
    justifyContent: 'center',
    alignItems: 'center',
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
  BottomText: {
    top: -420,
    fontWeight: 'bold',
    fontSize: 17,
    fontSize: 15,
  },
});

export default Detail;
