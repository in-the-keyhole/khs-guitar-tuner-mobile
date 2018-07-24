import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {Header} from 'components/common/header.js';
import {Cards} from 'components/common/cards.js';
import { COLORS } from 'constants/styles';

class Home extends React.Component {
  render() {
    return (
      <ScrollView style={styles.view}>
        <Header title="KHS Guitar Tuner"/>
        <Cards />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLORS.WHITE.OFFSET,
    paddingBottom: 150
  },
});

export {Home};