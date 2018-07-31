import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

class Cards extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            descriptions: this.props.descriptions,
			notes: this.props.notes
        };
	}
    render() {
        return (
            <Card containerStyle={styles.Card} >
            {
              this.state.descriptions.map((t, i) => {
                return (
                  <ListItem
					containerStyle={styles.ListItemStyle}
                    key={i}
                    title={t}
                    titleStyle={styles.ListItemTitle}
                    subtitle={this.state.notes[i]}
                    onPress={()=> {
                        global.description = t;
                        global.notes = this.state.notes[i];
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
        padding: 0,
        marginBottom: 20,
        backgroundColor: '#263238',
    },
	ListItemStyle: {
      height: 70,
      marginTop: 10
    }
})

export {Cards};