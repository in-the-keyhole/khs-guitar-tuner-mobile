import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Header} from '../common/header.js';
import {Cards} from '../common/cards.js';

class Home extends React.Component {
  goToAbout = () => {
    Actions.about();
  }
  
  gotoDetail = () =>  {
    Actions.detail();
  }

  render() {
      return (
          <View style={styles.view}>
              <Header title="KHS Guitar Tuner" gotoAbout={this.goToAbout} showAbout={true} />
              <Cards tunings={this.props.tunings} gotoDetail={this.gotoDetail} />
          </View>
    );
  }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#e6e6e6',
        margin: 18,
        flex: 1,
    },
});

export {Home};