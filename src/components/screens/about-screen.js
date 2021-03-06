import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Header } from '../common/header';
import { Actions } from 'react-native-router-flux';

class About extends React.Component {
    gotoHome = () => {
        Actions.home();
    }
    render(){
        return (
            <View style={styles.About}>
                <Header title="About the App" gotoHome={this.gotoHome} showAbout={false}/>
                <Text style={styles.Header}>KHS Guitar Tuner</Text>
                <Text style={styles.Text}>Click on a tuning to listen and follow the instructions to begin tuning your guitar.</Text>
                <Text style={styles.Text}>This mobile app was create by Keyhole Software using React Native elements and components.</Text>
                <Text style={styles.Text}>Visit our web application at: www.khsguitartuner.com</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    About: {
        backgroundColor: '#e6e6e6',
        paddingBottom: 1300
    },
    Text: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        color: '#808080'
    },
    Header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    }
});

export {About};