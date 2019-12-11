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
  Thumbnail
} from "native-base";
import { StatusBar, AsyncStorage, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

class MyAccountHeader extends Component {
  onHome = () => {
    Actions.pop();
    // Actions.Home();
  };

  render() {
    const uri =
      "https://vignette.wikia.nocookie.net/blindspot/images/c/cc/Janeportrait1.png/revision/latest?cb=20170328005601";
    return (
      <Header
        style={[
          UtilStyles.headerStandard,
          { borderBottomWidth: 0, elevation: 0 }
        ]}
      >
        <StatusBar backgroundColor={Color.yellow_psm} barStyle="dark-content" />
        <Container
          style={{
            flexDirection: "row",
            marginTop: -30,
            marginBottom: -45,
            backgroundColor: "transparent"
          }}
        >
          <Left style={{ flex: 0.5 }}>
            <Icon2
              size={25}
              style={{
                width: 30,
                height: 30,
                margin: 6,
                color: "black",
                marginTop: 10,
                marginLeft: 20
              }}
              name="ios-arrow-back"
              onPress={() => this.onHome()}
            />
          </Left>
          <Body style={{ flex: 2.5 }} />
          <Right
            style={{
              flex: 1,
              marginRight: 10
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

        <Container
          style={{
            flexDirection: "row",
            backgroundColor: "transparent",
            marginLeft: 20
          }}
        >
          <Thumbnail large source={{ uri: uri }} />
          <Container style={{ backgroundColor: "transparent", marginLeft: 20 }}>
            <Text style={UtilStyles.titleText}>Maya Fikri</Text>
            <Text style={UtilStyles.standardText}>mayafikri123@email.com</Text>
            <Button
              style={UtilStyles.buttonWhite}
              onPress={() => Actions.EditProfile()}
            >
              <Text style={UtilStyles.buttonTextBlack}>EDIT PROFILE</Text>
            </Button>
          </Container>
          {/* <Icon
            size={25}
            color="black"
            name="home"
            onPress={() => this.onHome()}
            style={{ marginRight: 20 }}
            // onPress={() => Actions.pop()}
          /> */}
        </Container>
      </Header>
    );
  }
}

export default MyAccountHeader;
