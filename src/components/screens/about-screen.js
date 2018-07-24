import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Header } from 'components/common/header';
import { COLORS } from 'constants/styles';
import { Actions } from 'react-native-router-flux';

class About extends React.Component {
    gotoHome = () => {
        Actions.home();
    }
    render(){
        return (
            <View style={styles.About}>
                <Header title="About the App" gotoHome={this.gotoHome} showAbout={false}/>
                <Text style={styles.Text}>This app was create by Keyhole Software using React Native elements and components.</Text>
                <Text style={styles.Text}>Click on a tuning to tune with that setting.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    About: {
        backgroundColor: COLORS.WHITE.OFFSET,
        paddingBottom: 520
    },
    Text: {
        fontSize: 15,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    }
});

export {About};