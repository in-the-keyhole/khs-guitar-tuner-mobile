import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {Header} from 'components/common/header.js';
import { Actions } from 'react-native-router-flux';
import {COLORS} from 'constants/styles.js';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            description: '',
            notes: ''
        }
    }

    gotoHome = () => {
        Actions.home()
    }

    render(){
        return(
            <View style={styles.Detail}>
                <Header title={this.state.description + ' Guitar Tuning'} showAbout={false} gotoHome={this.gotoHome} />
                <View style={styles.Fret}>
                    <Image style={styles.Fret} source={require('./images/fret2.jpg')} />
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
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {Detail};