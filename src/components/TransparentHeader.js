import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Thumbnail,
  Content
} from "native-base";
import { StatusBar, AsyncStorage, View, TouchableWithoutFeedback,Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/EvilIcons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../config/colors.json";
import { UtilStyles } from "../style/styles";
import FloatingBackButton from "./FloatingBackButton";
var marginTop = null;
class TransparentHeader extends Component {
  // cart = () => {
  //   console.log("cart");
  //   this.props.cart();
  // };
  constructor(props){
    super(props);
 
  }

  onButtonPress = () => {
    Actions.MyAccount();
  };

  componentWillMount(){
    if(Platform.OS === 'ios'){
      marginTop = -30;
    }else{
      marginTop = -10;
    }
  }

  render() {
    return (
      <Header style={[
        UtilStyles.headerTransparent,
        { borderBottomWidth: 0, elevation: 0 }
      ]}>
        <StatusBar backgroundColor={Color.yellow_psm} barStyle="dark-content" />
        <Container
          style={{
            // flexDirection: "row",
            marginTop: marginTop,
            // marginBottom: -50,
            // backgroundColor: "transparent",
            position:'relative'
          }}
        >
          <Content style={{marginTop:45}}>
            <Left style={{ flex: 1, flexDirection:"row" }}/>
            <Body style={{ flex: 1, marginLeft:20 }}>
              <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
                {this.props.header_text}
              </Text>
              <Text style={[UtilStyles.standardText, { textAlign: "center", color:'grey' }]}>
                {this.props.header_sub}
              </Text>
            </Body>
            <Right style={{ flex: 1, flexDirection: "row" }} />
          </Content>
          <Button onPress={() => Actions.pop()} style={{ width: 40, height: 40, paddingLeft: 12, marginRight: 30, position: 'absolute', top: 40, left: 20, backgroundColor: Color.yellow_psm }}>
                <Icon
                    size={25}
                    name="ios-arrow-back"
                    color="black"
                    style={{marginLeft:2}}
                />
            </Button>
        </Container>
      </Header>
    );
  }
}

export default TransparentHeader;
