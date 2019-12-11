import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  WebView,
  Dimensions
} from "react-native";
import { UtilStyles } from "../../style/styles";
import { Button, Left, Right, Body } from "native-base";
import { Actions } from "react-native-router-flux";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import TicketListHeader from "../Tickets/TicketListHeader";

var { height, width } = Dimensions.get("window");

export default class ParkingDetails extends Component {
  onButtonPress = () => {
    Actions.TicketSectionSelection();
  };

  // componentDidMount() {
  //   console.log("item", this.props.item);
  // }

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <StatusBar backgroundColor={"transparent"} translucent />
        <TicketListHeader header_text="Parking" rkCardImgOverlay />
        <ScrollView automaticallyAdjustContentInsets={true}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "transparent",
              marginTop: 0
            }}
          >
            <WebView
              source={{
                uri: "https://demo.stubapp.com/svg-example/parking.html"
              }}
              automaticallyAdjustContentInsets={true}
              style={{ width: width, height: 300 }}
              scalesPageToFit={true}
              onMessage={m => this.onMessage(m)}
            />
          </View>

          <View style={{ margin: 20, marginBottom: 10 }}>
            <Text style={[UtilStyles.titleText, { fontWeight: "bold" }]}>
              Booking
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={UtilStyles.standardText}>Monthly Parking</Text>
            </View>
          </View>

          {/* <View style={{ width: "100%" }}>
            <View
              style={{
                margin: 20,
                marginTop: 0,
                flexDirection: "row",
                backgroundColor: "white",
                borderRadius: 10,
                padding: 20,
                elevation: 3
              }}
            >
              <Left
                style={{
                  flex: 2
                }}
              >
                <Text
                  style={[
                    UtilStyles.standardText,
                    {
                      color: "grey",
                      marginBottom: 10
                    }
                  ]}
                >
                  New! Monthly Parking
                </Text>
                <Text style={UtilStyles.standardText}>
                  Lorem ipsum dolor sit amet consectetuer adipiscing
                </Text>
                <View style={{ marginTop: 20 }}>
                  <Button
                    style={UtilStyles.btnWhite}
                    onPress={() => Actions.ParkingBooking()}
                  >
                    <Text
                      style={[
                        UtilStyles.standardText,
                        {
                          paddingHorizontal: 10,
                          color: Color.yellow_psm,
                          fontWeight: "bold"
                        }
                      ]}
                    >
                      Book Monthly Parking
                    </Text>
                  </Button>
                </View>
              </Left>
              <Right
                style={{
                  flex: 1,
                  flexDirection: "row-reverse"
                }}
              >
                <View style={{ margin: 10, alignItems: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "white",
                      borderColor: Color.yellow_psm,
                      borderWidth: 1,
                      borderRadius: 10,
                      elevation: 0,
                      width: 60,
                      height: 60,
                      justifyContent: "center",
                      marginBottom: 5
                    }}
                  >
                    <Icon2
                      size={30}
                      style={{ color: Color.yellow_psm }}
                      name="local-parking"
                    />
                  </Button>
                </View>
              </Right>
            </View>
          </View> */}

          <View style={[UtilStyles.hr, { marginHorizontal: 15 }]} />

          <View style={{ width: "100%" }}>
            <View
              style={{ margin: 20, marginBottom: 10, flexDirection: "row" }}
            >
              <Left
                style={{
                  flex: 1
                }}
              >
                <Text style={UtilStyles.standardText}>Daily Parking</Text>
              </Left>
              <Right
                style={{
                  flex: 1,
                  flexDirection: "row-reverse"
                }}
              >
                <Button
                  style={[UtilStyles.btnYellow, { flexDirection: "row" }]}
                  onPress={() => Actions.ParkingBooking()}
                >
                  <Text
                    style={[
                      UtilStyles.btnTextBlack,
                      { paddingHorizontal: 10, fontWeight: "bold" }
                    ]}
                  >
                    Book
                  </Text>
                </Button>
              </Right>
            </View>
          </View>

          <View style={{ width: "100%" }}>
            <View style={{ margin: 20, marginTop: 10, flexDirection: "row" }}>
              <Left
                style={{
                  flex: 1
                }}
              >
                <Text style={UtilStyles.standardText}>Monthly Parking</Text>
              </Left>
              <Right
                style={{
                  flex: 1,
                  flexDirection: "row-reverse"
                }}
              >
                <Button
                  style={[UtilStyles.btnYellow, { flexDirection: "row" }]}
                  onPress={() => Actions.ParkingBookingMonthly()}
                >
                  <Text
                    style={[
                      UtilStyles.btnTextBlack,
                      { paddingHorizontal: 10, fontWeight: "bold" }
                    ]}
                  >
                    Book
                  </Text>
                </Button>
              </Right>
            </View>
          </View>

          <View style={{ margin: 20, marginTop: 0 }}>
            <Text style={UtilStyles.standardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pellentesque sem nec eros semper, a lacinia risus commodo. Sed in
              diam aliquam, bibendum ante et, congue lacus. Cras aliquam dictum
              ipsum, et gravida mi faucibus id. Morbi egestas erat a augue
              mollis faucibus. Nullam iaculis enim ac lobortis imperdiet. Sed
              nec ornare sem. Aenean eget est magna. Curabitur tortor elit,
              maximus sed dui malesuada, congue elementum eros.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
