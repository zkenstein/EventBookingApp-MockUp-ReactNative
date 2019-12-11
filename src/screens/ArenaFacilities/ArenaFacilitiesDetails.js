import React, { Component } from "react";
import { Text, View, ScrollView, Image, StatusBar } from "react-native";
import { UtilStyles } from "../../style/styles";
import { Button, Left, Right, Body, Tab, Tabs } from "native-base";
import { Actions } from "react-native-router-flux";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import BusinessList from "./BusinessList";
import ActivityList from "./ActivityList";

import FloatingBackButton from "../../components/FloatingBackButton";

export default class ArenaFacilitiesDetails extends Component {
  onButtonPress = () => {
    Actions.TicketSectionSelection();
  };

  componentDidMount() {
    console.log("item", this.props.item);
  }

  render() {
    return (
      <View
        style={[UtilStyles.containerJustifyCenter, { position: "relative" }]}
      >
        <View style={{ position: "relative" }}>
          <StatusBar backgroundColor={"transparent"} translucent />
          <ScrollView automaticallyAdjustContentInsets={true}>
            <View style={{ margin: 0 }}>
              <Image
                style={{
                  width: "100%",
                  height: 300
                }}
                source={this.props.item.image}
              />
              <FloatingBackButton />
            </View>

            <View style={{ margin: 20 }}>
              <Text style={[UtilStyles.titleText, { fontWeight: "bold" }]}>
                {this.props.item.title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={UtilStyles.standardText}>
                  {this.props.item.desc}
                </Text>
              </View>
            </View>

            <View style={[UtilStyles.hr, { marginHorizontal: 15 }]} />

            <View style={{ width: "100%" }}>
              <View style={{ margin: 20, flexDirection: "row" }}>
                <Left
                  style={{
                    flex: 2
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={UtilStyles.standardText}>
                      8:00am - 10:00pm
                    </Text>
                    <Text
                      style={[
                        UtilStyles.standardText,
                        {
                          fontWeight: "bold",
                          color: Color.material_light_green_700,
                          marginLeft: 10
                        }
                      ]}
                    >
                      Open Now
                    </Text>
                  </View>
                  <Text style={UtilStyles.standardText}>0123456789</Text>
                </Left>
                <Right
                  style={{
                    flex: 1,
                    flexDirection: "row-reverse"
                  }}
                >
                  <Button
                    style={UtilStyles.btnYellow}
                    onPress={() =>
                      Actions.ArenaFacilitiesBooking({ item: this.props.item })
                    }
                  >
                    <Text
                      style={[
                        UtilStyles.buttonTextBlack,
                        { paddingHorizontal: 20 }
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
                pellentesque sem nec eros semper, a lacinia risus commodo. Sed
                in diam aliquam, bibendum ante et, congue lacus. Cras aliquam
                dictum ipsum, et gravida mi faucibus id. Morbi egestas erat a
                augue mollis faucibus. Nullam iaculis enim ac lobortis
                imperdiet. Sed nec ornare sem. Aenean eget est magna. Curabitur
                tortor elit, maximus sed dui malesuada, congue elementum eros.
              </Text>
            </View>

            <View>
              <Tabs
                tabBarUnderlineStyle={{
                  backgroundColor: "white"
                }}
                tabContainerStyle={{
                  elevation: 0
                }}
              >
                <Tab
                  heading="Business"
                  tabStyle={{ backgroundColor: "white" }}
                  textStyle={[
                    UtilStyles.standardTextWithIcon,
                    { fontSize: 20, fontWeight: "bold", color: "grey" }
                  ]}
                  activeTabStyle={{ backgroundColor: "white" }}
                  activeTextStyle={[
                    UtilStyles.standardTextWithIcon,
                    { fontSize: 20, fontWeight: "bold" }
                  ]}
                >
                  {/* <ScrollView
                    automaticallyAdjustContentInsets={true}
                    style={UtilStyles.container}
                  >
                    <List style={{ alignItems: "center" }}> */}
                  <BusinessList />
                  {/* </List>
                  </ScrollView> */}
                </Tab>

                <Tab
                  heading="Activity"
                  tabStyle={{
                    backgroundColor: "white"
                  }}
                  textStyle={[
                    UtilStyles.standardTextWithIcon,
                    { fontSize: 20, fontWeight: "bold", color: "grey" }
                  ]}
                  activeTabStyle={{
                    backgroundColor: "white"
                  }}
                  activeTextStyle={[
                    UtilStyles.standardTextWithIcon,
                    { fontSize: 20, fontWeight: "bold" }
                  ]}
                >
                  {/* <ScrollView
                    automaticallyAdjustContentInsets={true}
                    // style={UtilStyles.container}
                  > */}
                  {/* <List style={{ alignItems: "center" }}> */}

                  <ActivityList />

                  {/* </List>*/}
                  {/* </ScrollView> */}
                </Tab>
              </Tabs>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
