import React from 'react';
import { Text } from 'react-native';
import { Header } from 'components/common/header';

class About extends React.Component {
    render(){
        return (
            <View style={styles.About}>
                <Header title="About the App" />
                <Text>This app was create by Keyhole Software using react native elements and components.</Text>
                <Text>Click on a tuning to tune with that setting.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    About: {
        backgroundColor: COLORS.WHITE.OFFSET,
        paddingBottom: 150
    }
});

export {About};