import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback } from 'react-native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 60;
  align-items: center;
  background-color: ${COLORS.BLUE.BLUE};
  justify-content: space-between;
`;

const IconContainer = styled.View`
  padding-left: 10;
  padding-right: 20;
  padding-top: 20;
`;

const TitleContainer = styled.Text`
    color: ${COLORS.WHITE.WHITE};
    padding-top: 20;
    padding-left: 15;
`;

class Header extends React.Component {
    render(){
        return(
            <Container>
                <TitleContainer style={{fontWeight: 'bold', fontSize: 20}}>{this.props.title}</TitleContainer>

                <TouchableWithoutFeedback onPress={() => {alert('About')}}>
                    <IconContainer>
                        <Icon name={'info'} size={30} color={COLORS.WHITE.WHITE} />
                    </IconContainer>
                </TouchableWithoutFeedback>
            </Container>
        );
    }
}

export {Header};