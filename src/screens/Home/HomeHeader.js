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
  Badge
} from "native-base";
import { StatusBar, AsyncStorage, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/EvilIcons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

class HomeHeader extends Component {
  onButtonPress = () => {
    // Actions.pop();
    Actions.MyAccount();
  };

  render() {
    return (
      <Header
        style={[UtilStyles.headerSmall, { borderBottomWidth: 0, elevation: 0 }]}
      >
        <StatusBar backgroundColor={Color.yellow_psm} barStyle="dark-content" />
        <Container
          style={{
            flexDirection: "row",
            marginTop: -30,
            marginBottom: -50,
            backgroundColor: "transparent"
          }}
        >
          <Left style={{ flex: 1 }}>
            <Icon
              size={25}
              style={{
                width: 30,
                height: 30,
                margin: 6,
                color: "black",
                marginTop: 10,
                marginLeft: 20
              }}
              name="user-circle"
              onPress={() => this.onButtonPress()}
            />
          </Left>
          <Body style={{ flex: 2 }}>
            <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
              KUALA LUMPUR
            </Text>
            <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
              SPORT CITY
            </Text>
          </Body>
          <Right
            style={{
              flex: 1
              // marginRight: 10
            }}
          >
            {/* <Button
              transparent
              style={{ flex: 1 }}
              onPress={() => Actions.ChatList()}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <IconBadge
                  MainElement={
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        margin: 10
                      }}
                      source={require("../../images/Icon/msgblack.png")}
                    />
                  }
                  BadgeElement={
                    <Text
                      style={{
                        color: "white",
                        marginLeft: -9,
                        marginRight: -9,
                        textAlign: "center",
                        fontSize: 10,
                        alignSelf: "flex-start"
                      }}
                    >
                      1
                    </Text>
                  }
                />
              </View>
            </Button> */}

            <Button
              transparent
              style={{ flex: 1 }}
              onPress={() => Actions.InboxList()}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <IconBadge
                  MainElement={
                    <Image
                      style={{
                        width: 20,
                        height: 25,
                        margin: 10,
                        resizeMode: "stretch"
                      }}
                      source={require("../../images/Icon/notifications.png")}
                    />
                    // <Icon
                    //   size={25}
                    //   style={{
                    //     width: 30,
                    //     height: 30,
                    //     margin: 6,
                    //     color: "black",
                    //     marginTop: 10
                    //   }}
                    //   name="bell-o"
                    // />
                  }
                  BadgeElement={
                    <Text
                      style={{
                        color: "white",
                        marginLeft: -9,
                        marginRight: -9,
                        textAlign: "center",
                        fontSize: 10,
                        alignSelf: "flex-start"
                      }}
                    >
                      1{/* {this.props.count} */}
                    </Text>
                  }
                />
              </View>
            </Button>
          </Right>
        </Container>
      </Header>
    );
  }
}

export default HomeHeader;
