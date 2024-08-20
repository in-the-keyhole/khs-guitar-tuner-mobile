import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, ListItem, Icon } from '@rneui/themed';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tunings: props.tunings || [],
        };
    }

    render() {
        return (
            <Card containerStyle={styles.Card}>
                {this.state.tunings.map((t, i) => (
                    <ListItem
                        key={i}
                        containerStyle={styles.ListItemStyle}
                        onPress={() => {
                            global.description = t.description;
                            global.notes = t.notes;
                            this.props.gotoDetail();
                        }}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={styles.ListItemTitle}>
                                {t.description}
                            </ListItem.Title>
                            <ListItem.Subtitle style={styles.ListItemSubtitle}>
                                {t.notes}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                              <Icon name="chevron-right" type="feather" color="white" />

                    </ListItem>
                ))}
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    ListItemTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
        ListItemSubtitle: {
            color: 'lightgrey',
            fontSize: 14,
        },
    Card: {
        flex: 1,
        marginBottom: 15,
        backgroundColor: '#263238',
    },
    ListItemStyle: {
        backgroundColor: 'transparent',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});

export default Cards;
