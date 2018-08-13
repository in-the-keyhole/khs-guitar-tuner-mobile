import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

class Cards extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            tunings: this.props.tunings,
        };
	}
render() {
        return (
            <Card containerStyle={styles.Card} >
            {
              this.state.tunings.map((t, i) => {
                return (
                  <ListItem
                        containerStyle={styles.ListItemStyle}
                    key={i}
                    title={t.description}
                        titleStyle={styles.ListItemTitle}
                    subtitle={t.notes}
                    onPress={()=> {
                        global.description = t.description;
                        global.notes = t.notes;
                        this.props.gotoDetail();
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
        fontWeight: 'bold',
        fontSize: 20
    },
    Card: {
        flex: 1,
        marginBottom: 15,
        backgroundColor: '#263238',
    },
    ListItemStyle: {
        height: '12.5%',
    }
})

export {Cards};