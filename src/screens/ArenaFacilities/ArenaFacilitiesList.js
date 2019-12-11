import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import { UtilStyles } from "../../style/styles";
import {
  Button,
  Left,
  Right,
  Card,
  Tabs,
  Container,
  Content,
  Tab,
  List
} from "native-base";
import Color from "../../config/colors.json";
import KlscHeader from "../../components/KlscHeader";
import SearchBar from "../SearchBar";
import BusinessList from "./BusinessList";
import ActivityList from "./ActivityList";
import { Actions } from "react-native-router-flux";

export default class ArenaFacilitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderlistArena = () => {
    var temp = [
      {
        image: require("../../images/expImg/bukitjalil.jpg"),
        title: "Stadium National Bukit Jalil",
        desc: "Football * Meeting * Auditorium",
        rentType: false
      },
      {
        image: require("../../images/expImg/axiata.jpg"),
        title: "Axiata Arena",
        desc: "Event Space",
        rentType: false
      },
      {
        image: require("../../images/expImg/pool.jpg"),
        title: "National Aquatic Center",
        desc: "Swimming Pool",
        rentType: false
      }
    ];
    return (
      <View style={{ paddingRight: 30 }}>
        <FlatList
          horizontal={true}
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => Actions.ArenaFacilitiesDetails({ item: item })}
            >
              <Card style={{ marginLeft: 10, borderRadius: 10 }}>
                <Image
                  style={{
                    width: 250,
                    height: 180,
                    resizeMode: "stretch",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                  }}
                  source={item.image}
                />
                <View style={{ padding: 10, justifyContent: "center" }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={UtilStyles.standardText}>{item.desc}</Text>
                  </View>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <KlscHeader header_text="Facilities" rkCardImgOverlay />
        {/* <SearchBar /> */}
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={UtilStyles.container}
        >
          <View
            style={{
              flexDirection: "row",
              margin: 20,
              marginBottom: 10
            }}
          >
            <Left>
              <Text
                style={[
                  UtilStyles.standardTextWithIcon,
                  { fontSize: 20, fontWeight: "bold" }
                ]}
              >
                Arena
              </Text>
            </Left>
          </View>
          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingTop: 0
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <List>{this.renderlistArena()}</List>
          </ScrollView>
          <View>
            <ScrollView>
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
                  <BusinessList />
                </Tab>
                <Tab
                  heading="Activity"
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
                  <ActivityList />
                </Tab>
              </Tabs>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
