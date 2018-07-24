import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { COLORS } from 'constants/styles';

class Cards extends React.Component{
	constructor() {
        super();
        this.state = {
            tunings: []
        };
	}
	
	componentWillMount() {
        fetch( 'http://www.khsguitartuner.com/api-tunings' )
            .then( results => { return results.json(); } )
            .then( data => {
                this.setState( { tunings: data._embedded.tunings } );
            } )
            .catch(( error ) => { console.log( error ) } );
    }
	
    render() {
        return (
            <Card containerStyle={styles.Card} >
            {
              this.state.tunings.map((t, i) => {
                return (
                  <ListItem
                    key={i}
                    title={t.description}
                    titleStyle={styles.ListItemTitle}
                    subtitle={t.notes}
                    onPress={()=> {
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
        fontWeight: 'bold'
    },
    Card: {
        padding: 0,
        marginBottom: 20,
        backgroundColor: COLORS.GREY.GREY,
    }
})

export {Cards};