import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native';

class Header extends React.Component {
    render(){
        return(
            <Container>
                <TitleContainer>{this.props.title}</TitleContainer>

                {this.props.showAbout ?
                <TouchableWithoutFeedback onPress={() => this.props.gotoAbout()}>
                    <IconContainer>
                        <Icon name={'info'} size={30} color={'#FFFFFF'} />
                    </IconContainer>
                </TouchableWithoutFeedback> :
                <TouchableWithoutFeedback onPress={() => this.props.gotoHome()}>
                    <IconContainer>
                        <Icon name={'home'} size={30} color={'#FFFFFF'} />
                    </IconContainer>
                </TouchableWithoutFeedback>
                }
            </Container>
        );
    }
}

const Container = styled.View`
  flex-direction: row;
  height: 60px;
  align-items: center;
  background-color: #0d47a1;
  justify-content: space-between;
`;

const IconContainer = styled.View`
  padding-left: 10px;
  padding-right: 20px;
  padding-top: 20px;
`;

const TitleContainer = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 20px;
  padding-left: 15px;
  padding-top: 20px;
`;

export { Header };
