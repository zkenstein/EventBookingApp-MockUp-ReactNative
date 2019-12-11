import React, { Component } from "react";
import { Text, View, ScrollView, WebView, StatusBar } from "react-native";
import { UtilStyles } from "../../style/styles";
import { Button, Left, Right, ListItem, Body } from "native-base";
import { Actions } from "react-native-router-flux";
import Color from "../../config/colors.json";
import IconBadge from "react-native-icon-badge";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";

export default class ParkingSelection extends Component {
  onButtonPress = () => {
    Actions.AddOns();
  };

  onCart = () => {
    Actions.Cart();
  };

  onMessage(m) {
    alert(m.nativeEvent.data);
  }
  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
        <ScrollView automaticallyAdjustContentInsets={true}>
          <View
            style={{
              justifyContent: "center",
              padding: 10,
              marginTop: 30,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <View style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.titleText}>Axiata Arena</Text>
            </View>
            <View
              style={{ flex: 1, paddingLeft: 5, flexDirection: "row-reverse" }}
            >
              <Button
                style={{ backgroundColor: "white", borderWidth: 0 }}
                onPress={() => this.onCart()}
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
                      <Icon
                        size={25}
                        style={{
                          width: 30,
                          height: 30,
                          margin: 6,
                          color: "black",
                          marginTop: 10
                        }}
                        name="shopping-cart"
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
                        1{/* {this.props.count} */}
                      </Text>
                    }
                    // IconBadgeStyle={{
                    //   width: 15,
                    //   height: 20,
                    //   backgroundColor: Color.material_red_400
                    // }}
                    // Hidden={this.props.count == 0}
                  />
                </View>
              </Button>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "transparent"
            }}
          >
            <WebView
              source={{
                uri:
                  "https://demo.stubapp.com/svg-example/seats.html?data=s1194262"
              }}
              automaticallyAdjustContentInsets={true}
              style={{ width: 300, height: 300 }}
              scalesPageToFit={true}
              onMessage={m => this.onMessage(m)}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: Color.material_grey_100,
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                fontFamily: "Lato-Bold",
                fontSize: 12
              }}
            >
              1000 Available
            </Text>
          </View>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0
            }}
            onPress={() => this.onButtonPress()}
          >
            <Left style={{ paddingLeft: 20 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Parking Gate A
              </Text>
            </Left>
            <Right style={{ paddingRight: 30 }}>
              <Text style={UtilStyles.standardText}>RM 2</Text>
            </Right>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0
            }}
            onPress={() => this.onButtonPress()}
          >
            <Left style={{ paddingLeft: 20 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Parking Gate B
              </Text>
            </Left>
            <Right style={{ paddingRight: 30 }}>
              <Text style={UtilStyles.standardText}>RM 2</Text>
            </Right>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0
            }}
            onPress={() => this.onButtonPress()}
          >
            <Left style={{ paddingLeft: 20 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Parking Gate C
              </Text>
            </Left>
            <Right style={{ paddingRight: 30 }}>
              <Text style={UtilStyles.standardText}>RM 2</Text>
            </Right>
          </ListItem>
        </ScrollView>
        <View
          style={{
            justifyContent: "center",
            margin: 10,
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1, paddingRight: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthWhite}
              onPress={() => Actions.pop()}
            >
              <Text style={UtilStyles.buttonTextBlack}>Back</Text>
            </Button>
          </View>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => this.onButtonPress()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Add Parking</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
                <View style={UtilStyles.circleWhiteOnButton}>
                  <Icon2
                    size={20}
                    style={{
                      color: "black"
                    }}
                    name="ios-arrow-forward"
                    onPress={() => this.onButtonPress()}
                  />
                </View>
              </Right>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
