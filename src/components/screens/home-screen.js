import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Header} from 'components/common/header.js';
import {Cards} from 'components/common/cards.js';
import { COLORS } from 'constants/styles';

class Home extends React.Component {
  goToAbout = () => {
    Actions.about();
  }
  
  gotoDetail = () =>  {
    Actions.detail();
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <Header title="KHS Guitar Tuner" gotoAbout={this.goToAbout} showAbout={true}/>
        <Cards tunings={this.props.tunings} gotoDetail={this.gotoDetail}/>
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