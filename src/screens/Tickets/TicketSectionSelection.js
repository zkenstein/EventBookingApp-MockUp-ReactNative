import React, { Component } from "react";
import { Text, View, ScrollView, WebView, StatusBar, Dimensions } from "react-native";
import { UtilStyles } from "../../style/styles";
import { Button, ListItem, Left, Right } from "native-base";
import { Actions } from "react-native-router-flux";
import Color from "../../config/colors.json";
var { height, width } = Dimensions.get('window');
import TransparentHeader from "../../components/TransparentHeader";
var uri = "https://demo.stubapp.com/svg-example/";
// var uri = "http://localhost:8080/";
export default class TicketSectionSelection extends Component {
  onButtonPress = () => {
    Actions.TicketSeatSelection({ item: this.props.item });
  };

  onMessage(m) {
    alert(m.nativeEvent.data);
  }
  render() {
    // var ticketlist = <View style={UtilStyles.containerJustifyCenter}>
    //   <Loading />
    // </View>;
    // if (!this.state.isLoading) {
    //   ticketlist = this.getTicketList();
    // }

    return (
      <View
        style={[
          UtilStyles.containerJustifyCenter,
          { backgroundColor: Color.material_grey_100 }
        ]}
      >
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
        <TransparentHeader header_text={this.props.item.title} header_sub={this.props.item.venue} rkCardImgOverlay />
        <ScrollView automaticallyAdjustContentInsets={true}>
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
              source={{ uri: uri }}
              automaticallyAdjustContentInsets={true}
              style={{ width: width, height: 300 }}
              scalesPageToFit={false}
              onMessage={m => this.onMessage(m)}
            />

          </View>

          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: Color.material_grey_100
            }}
          >
            <Text
              style={{
                fontFamily: "Lato-Bold",
                fontSize: 12
              }}
            >
              80,000 Available
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
                Section 301
              </Text>
            </Left>
            <Right style={{ paddingRight: 30 }}>
              <Text style={UtilStyles.standardText}>RM 200</Text>
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
                Section 302
              </Text>
            </Left>
            <Right style={{ paddingRight: 30 }}>
              <Text style={UtilStyles.standardText}>RM 300</Text>
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
                Section 303
              </Text>
            </Left>
            <Right style={{ paddingRight: 30 }}>
              <Text style={UtilStyles.standardText}>RM 400</Text>
            </Right>
          </ListItem>
          {/* {ticketlist} */}
        </ScrollView>
      </View>
    );
  }
}
