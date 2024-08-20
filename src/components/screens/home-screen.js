import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../common/header';
import Cards from '../common/cards';
import { TUNINGS } from '../common/constants/tunings';

const Home = ({ navigation }) => {
  const gotoDetail = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={styles.view}>
      <Header title="KHS Guitar Tuner" gotoAbout={() => navigation.navigate('About')} showAbout={true} />
      <Cards tunings={TUNINGS} gotoDetail={gotoDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#e6e6e6',
    margin: 18,
    flex: 1,
  },
});

export default Home;
