import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { COLORS } from 'constants/styles';
import TUNINGS from 'data/data.js';

class Cards extends React.Component{
    render() {
        return (
            <Card containerStyle={styles.card} >
            {
              TUNINGS.map((t, i) => {
                return (
                  <ListItem
                    key={i}
                    title={t.description}
                    titleStyle={styles.ListItemTitle}
                    subtitle={t.notes}
                    onPress={()=> {
                        alert(t.description);
                    }}
                  />
                );
              })
            }
          </Card>
        );
      }
}

const styles = StyleSheet.create({
    ListItemTitle: {
        color: 'white', 
        fontWeight: 'bold'
    },
    card: {
        padding: 0,
        marginBottom: 20,
        backgroundColor: COLORS.GREY.GREY,
    }
})

export {Cards};