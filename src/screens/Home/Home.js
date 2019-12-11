import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  BackHandler,
  Alert,
  Dimensions
} from "react-native";
import HomeHeader from "./HomeHeader";
import { UtilStyles } from "../../style/styles";
import { Button, Left, Right, Card, List } from "native-base";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { Actions } from "react-native-router-flux";
import SearchBar from "../SearchBar";
import Carousel from "react-native-smart-carousel";

import firebase from "react-native-firebase";
let Analytics = firebase.analytics();

const datacarousel = [
  {
    imagePath: require("../../images/jason.jpg")
    // title: "Jason Mraz In Kuala Lumpur",
    // venue: "Mon 16 Mac, 8:30 Axiata Arena"
  },
  {
    imagePath: require("../../images/edposter.jpg")
    // title: "Ed Sheeran Divide World Tour",
    // venue: "Mon 16 Mac, 8:30 Axiata Arena"
  },
  {
    imagePath: require("../../images/ct.jpg")
    // title: "Dato' Sri Siti Nurhaliza",
    // venue: "Mon 16 Mac, 8:30 Axiata Arena"
  },
  {
    imagePath: require("../../images/lany.jpg")
    // title: "Lany Malibu Nights World Tour",
    // venue: "Mon 16 Mac, 8:30 Axiata Arena"
  }
];

export default class Home extends Component {
  constructor() {
    super();

    Analytics.setAnalyticsCollectionEnabled(true);
    Analytics.setUserId("001");
    // Analytics.setUserProperty(<propKey1>, <propValue1>)
    Analytics.setUserProperty("userType", "developer");
    Analytics.setCurrentScreen("home_screen", "Home");
    Analytics.logEvent("hi");
  }

  static onEnter = () => {
    Actions.refresh();
  };
  componentWillMount = () => {
    console.log("mount ", Actions.currentScene);
    BackHandler.addEventListener("hardwareBackPress", this._handleback);
  };

  componentWillUnmount() {
    console.log("mount ", Actions.currentScene);
    BackHandler.removeEventListener("hardwareBackPress", this._handleback);
  }

  _handleback = () => {
    console.log("Action current scene", Actions.currentScene);
    if (Actions.currentScene === "Home") {
      Alert.alert(
        "Exit App",
        "Are you sure to exit the app ?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => BackHandler.exitApp()
          }
        ],
        {
          cancelable: false
        }
      );
      return true;
    }
  };
  onTicketList = () => {
    Actions.TicketList();
  };

  renderlistEvent = () => {
    var temp = [
      {
        poster: require("../../images/jasonposter.jpg"),
        image: require("../../images/jason.jpg"),
        title: "Jason Mraz In Kuala Lumpur",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/edposter.jpg"),
        image: require("../../images/edposter.jpg"),
        title: "Ed Sheeran Divide World Tour",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/ct2.jpg"),
        image: require("../../images/ct.jpg"),
        title: "Dato' Sri Siti Nurhaliza",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/lanyposter.jpg"),
        image: require("../../images/lany.jpg"),
        title: "Lany Malibu Nights World Tour",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
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
              onPress={() => Actions.TicketDetails({ item: item })}
            >
              <Card style={{ marginLeft: 10, borderRadius: 10 }}>
                <Image
                  style={{
                    resizeMode: "stretch",
                    width: 95,
                    height: 150,
                    borderRadius: 10
                  }}
                  source={item.poster}
                  rkCardImgOverlay
                />
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "white",
                    position: "absolute",
                    // alignSelf: "flex-end",
                    padding: 2,
                    borderRadius: 3,
                    marginLeft: 60,
                    marginTop: 5
                  }}
                >
                  <Text style={[UtilStyles.standardText, { fontSize: 10 }]}>
                    MON
                  </Text>
                  <Text style={[UtilStyles.titleText, { fontWeight: "bold" }]}>
                    13
                  </Text>
                  <Text style={[UtilStyles.standardText, { fontSize: 10 }]}>
                    MAY
                  </Text>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };

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
        <HomeHeader rkCardImgOverlay />

        {/* <SearchBar /> */}

        <ScrollView
          ref={c => {
            this.parentScrollView = c;
          }}
        >
          <Carousel
            data={datacarousel}
            navigationType="dots"
            autoPlay={true}
            playTime={5000}
            navigation={true}
            navigationColor={Color.yellow_psm}
            parentScrollViewRef={this.parentScrollView}
            onPress={() => this.onTicketList()}
          />
          {/* 1st */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20,
              marginBottom: 0
            }}
          >
            {/* 1st */}
            {/* <View
              style={{
                margin: 10,
                alignItems: "center"
              }}
            >
              <Button
                style={{
                  backgroundColor: Color.yellow_psm,
                  borderRadius: 10,
                  elevation: 3,
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  marginBottom: 5
                }}
                onPress={() => this.onTicketList()}
              >
                <Icon2 size={30} style={{ color: "white" }} name="event-seat" />
              </Button>
              <Text style={UtilStyles.standardTextButtonHome}>Event</Text>
            </View> */}
            {/* 2nd */}
            <View style={{ margin: 10, alignItems: "center" }}>
              <Button
                style={{
                  backgroundColor: Color.yellow_psm,
                  borderRadius: 10,
                  elevation: 3,
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  marginBottom: 5
                }}
                onPress={() => Actions.ArenaFacilitiesList()}
              >
                <Icon3 size={30} style={{ color: "white" }} name="stadium" />
              </Button>
              <Text style={UtilStyles.standardTextButtonHome}>Arena &</Text>
              <Text style={UtilStyles.standardTextButtonHome}>Facilities</Text>
            </View>

            {/* 3rd */}
            <View style={{ margin: 10, alignItems: "center" }}>
              <Button
                style={{
                  backgroundColor: Color.yellow_psm,
                  borderRadius: 10,
                  elevation: 3,
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  marginBottom: 5
                }}
                onPress={() => Actions.ParkingDetails()}
              >
                <Icon2
                  size={30}
                  style={{ color: "white" }}
                  name="local-parking"
                />
              </Button>
              <Text style={UtilStyles.standardTextButtonHome}>Parking</Text>
            </View>

            {/* 4th */}
            <View style={{ margin: 10, alignItems: "center" }}>
              <Button
                style={{
                  backgroundColor: Color.yellow_psm,
                  borderRadius: 10,
                  elevation: 3,
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  marginBottom: 5
                }}
                onPress={() => Actions.RestaurantList()}
              >
                <Icon3 size={30} style={{ color: "white" }} name="food" />
              </Button>
              <Text style={UtilStyles.standardTextButtonHome}>Meal</Text>
            </View>

            <View style={{ margin: 10, alignItems: "center" }}>
              <Button
                style={{
                  backgroundColor: Color.yellow_psm,
                  borderRadius: 10,
                  elevation: 3,
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  marginBottom: 5
                }}
                onPress={() => Actions.MerchandiseList()}
              >
                <Icon3 size={30} style={{ color: "white" }} name="shopping" />
              </Button>
              <Text style={UtilStyles.standardTextButtonHome}>Shop</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              marginBottom: 10,
              marginTop: 0
            }}
          >
            <Left>
              <Text
                style={[
                  UtilStyles.standardTextWithIcon,
                  { fontSize: 20, fontWeight: "bold" }
                ]}
              >
                Events
              </Text>
            </Left>
            <Right>
              <Text
                style={[
                  UtilStyles.standardTextWithIcon,
                  { fontSize: 15, color: Color.yellow_psm, fontWeight: "bold" }
                ]}
                onPress={() => this.onTicketList()}
              >
                See All
              </Text>
            </Right>
          </View>
          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingTop: 0,
              paddingRight: 100
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <List>{this.renderlistEvent()}</List>
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              marginBottom: 10,
              marginTop: 0
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
        </ScrollView>
      </View>
    );
  }
}
