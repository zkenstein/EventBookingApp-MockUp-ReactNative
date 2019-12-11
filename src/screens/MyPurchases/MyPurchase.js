import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  BackHandler
} from "react-native";
import { UtilStyles } from "../../style/styles";
import {
  Button,
  Left,
  Right,
  Card,
  List,
  Tab,
  Tabs,
  Body,
  Footer
} from "native-base";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { Actions } from "react-native-router-flux";
import MyPurchaseHeader from "./MyPurchaseHeader";

export default class MyPurchase extends Component {
  static onEnter = () => {
    Actions.refresh();
  };

  constructor(props) {
    super(props);
    this.state = {
      backButton: true
    };
  }

  componentWillUnmount() {
    console.log("unmount ", Actions.currentScene);
    BackHandler.removeEventListener("hardwareBackPress", () => false);
  }

  componentWillMount() {
    console.log("mount ", Actions.currentScene);
    console.log(this.props.text);
    if (this.props.text == "success") {
      this.setState({
        backButton: false
      });
      BackHandler.addEventListener(
        "hardwareBackPress",
        () => this.handleBackButton
      );
    }
  }

  // componentWillReceiveProps() {
  //   console.log(this.props.text);
  //   if (this.props.text == "success") {
  //     this.setState({
  //       backButton: false
  //     });
  //     BackHandler.addEventListener(
  //       "hardwareBackPress",
  //       () => this.handleBackButton
  //     );
  //   }
  // }

  handleBackButton = () => {
    return true;
  };

  onHome = () => {
    // Actions.pop();
    // BackHandler.removeEventListener("hardwareBackPress", () =>
    //   false
    // );
    Actions.Home({ text: "donePayment" });
  };

  renderlistEvent = () => {
    var temp = [
      {
        poster: require("../../images/jasonposter.jpg"),
        image: require("../../images/jason.jpg"),
        price: "RM 463.96",
        title: "Jason Mraz In Kuala Lumpur",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/edposter.jpg"),
        image: require("../../images/edposter.jpg"),
        price: "RM 463.96",
        title: "Ed Sheeran Divide World Tour",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      }
      // {
      //   poster: require("../../images/ct2.jpg"),
      //   image: require("../../images/ct.jpg"),
      //   title: "Dato' Sri Siti Nurhaliza",
      //   venue: "Mon 16 Mac, 8:30 Axiata Arena"
      // },
      // {
      //   poster: require("../../images/lanyposter.jpg"),
      //   image: require("../../images/lany.jpg"),
      //   title: "Lany Malibu Nights World Tour",
      //   venue: "Mon 16 Mac, 8:30 Axiata Arena"
      // }
    ];
    return (
      <View
        style={{
          marginHorizontal: 20
        }}
      >
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <Button
              style={[
                UtilStyles.buttonMyPurchase,
                { height: 100, marginTop: 10, padding: 10 }
              ]}
              onPress={() => Actions.QRCodeDetails({ item: item })}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%"
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <Text style={[UtilStyles.standardText]}>
                    Live Kuala Lumpur 2019
                  </Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Text style={[UtilStyles.smallText]}>{item.venue}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.01,
                  height: "100%",
                  backgroundColor: Color.yellow_psm,
                  marginHorizontal: 10
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: "100%"
                }}
              >
                <View style={{ flex: 2, height: "100%" }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        UtilStyles.smallText,
                        {
                          fontWeight: "bold"
                        }
                      ]}
                    >
                      Quantity
                    </Text>
                    <Text style={UtilStyles.smallText}>3 Tickets</Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text style={[UtilStyles.smallText, { color: "grey" }]}>
                      TOTAL
                    </Text>
                    <Text
                      style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50
                    }}
                    source={require("../../images/expImg/logoQr.png")}
                  />
                  <Text style={{ color: "grey", fontSize: 8, marginTop: 10 }}>
                    01010101
                  </Text>
                </View>
              </View>
            </Button>
          )}
        />
      </View>
    );
  };

  renderlistMerch = () => {
    var temp = [
      {
        image: require("../../images/expImg/jersey1.jpg"),
        title: "Jersey Malaysia",
        price: "RM 90.00",
        desc: "Black",
        venue: "Mon, 13 May 2019, 8:00pm"
      },
      {
        image: require("../../images/expImg/jersey2.jpg"),
        title: "Jersey Malaysia",
        price: "RM 90.00",
        desc: "White",
        venue: "Mon, 13 May 2019, 8:00pm"
      }
      // {
      //   image: require("../../images/expImg/jersey3.jpg"),
      //   title: "Jersey Malaysia",
      //   price: "RM90.00",
      //   star: "4.9"
      // },
      // {
      //   image: require("../../images/expImg/jersey4.jpg"),
      //   title: "Jersey Malaysia",
      //   price: "RM90.00",
      //   star: "4.9"
      // }
    ];
    return (
      <View
        style={{
          marginHorizontal: 20
        }}
      >
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <Button
              style={[
                UtilStyles.buttonMyPurchase,
                { height: 100, marginTop: 10, padding: 10 }
              ]}
              onPress={() => Actions.MyMerchDetails({ item: item })}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%"
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <Text style={[UtilStyles.standardText]}>{item.desc}</Text>
                  <Text style={UtilStyles.smallText}>3 Items</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Text style={[UtilStyles.smallText]}>Date Of Purchase</Text>
                  <Text style={[UtilStyles.smallText]}>{item.venue}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.01,
                  height: "100%",
                  backgroundColor: Color.yellow_psm,
                  marginHorizontal: 10
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: "100%"
                }}
              >
                <View style={{ flex: 2, height: "100%" }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        UtilStyles.smallText,
                        {
                          fontWeight: "bold"
                        }
                      ]}
                    >
                      Delivery Address
                    </Text>
                    <Text style={{ fontSize: 6 }}>No 123, Sub Street,</Text>
                    <Text style={{ fontSize: 6 }}>Main Street,</Text>
                    <Text style={{ fontSize: 6 }}>53100, Kuala Lumpur</Text>
                    <Text style={{ fontSize: 6 }}>
                      Wilayah Persekutuan Kuala Lumpur
                    </Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text style={[UtilStyles.smallText, { color: "grey" }]}>
                      TOTAL
                    </Text>
                    <Text
                      style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 60
                    }}
                    source={item.image}
                  />
                </View>
              </View>
            </Button>
          )}
        />
      </View>
    );
  };

  renderlistFNB = () => {
    var temp = [
      {
        image: require("../../images/expImg/meal3.jpg"),
        title: "Set 3",
        price: "RM 24.00",
        desc: "Subway",
        venue: "Mon, 13 May 2019, 8:00pm"
      },
      // {
      //   image: require("../../images/expImg/meal4.jpg"),
      //   title: "Set 4",
      //   price: "RM24.00",
      //   star: "4.9"
      // },
      // {
      //   image: require("../../images/expImg/meal5.jpg"),
      //   title: "Set 5",
      //   price: "RM24.00",
      //   star: "4.9"
      // },
      {
        image: require("../../images/expImg/meal6.jpg"),
        title: "Set 6",
        price: "RM 24.00",
        desc: "KLSC Cafe",
        venue: "Mon, 13 May 2019, 8:00pm"
      }
    ];
    return (
      <View
        style={{
          marginHorizontal: 20
        }}
      >
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <Button
              style={[
                UtilStyles.buttonMyPurchase,
                { height: 100, marginTop: 10, padding: 10 }
              ]}
              onPress={() => Actions.MyFNBDetails({ item: item })}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%"
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <Text style={[UtilStyles.standardText]}>{item.desc}</Text>
                  <Text style={UtilStyles.smallText}>3 Sets</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Text style={[UtilStyles.smallText]}>Date Of Purchase</Text>
                  <Text style={[UtilStyles.smallText]}>{item.venue}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.01,
                  height: "100%",
                  backgroundColor: Color.yellow_psm,
                  marginHorizontal: 10
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: "100%"
                }}
              >
                <View style={{ flex: 2, height: "100%" }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        UtilStyles.smallText,
                        {
                          fontWeight: "bold"
                        }
                      ]}
                    >
                      Self Pickup
                    </Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text style={[UtilStyles.smallText, { color: "grey" }]}>
                      TOTAL
                    </Text>
                    <Text
                      style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 60
                    }}
                    source={item.image}
                  />
                </View>
              </View>
            </Button>
          )}
        />
      </View>
    );
  };

  renderlistFacilities = () => {
    var temp = [
      {
        image: require("../../images/expImg/meeting.jpg"),
        title: "Meeting Room",
        desc: "Stadium National Bukit Jalil",
        price: "RM 90.00",
        type: "Business",
        rentType: "Room",
        venue: "Mon, 13 May 2019, 8:00pm"
      },
      {
        image: require("../../images/expImg/pool.jpg"),
        title: "Swimming Pool",
        desc: "National Aquatiq Centre",
        price: "RM 90.00",
        type: "Activity",
        rentType: false,
        venue: "Mon, 13 May 2019, 8:00pm"
      },
      {
        image: require("../../images/expImg/basketball.jpg"),
        title: "Basketball Court",
        desc: "National Aquatiq Centre",
        price: "RM 90.00",
        type: "Activity",
        rentType: "Court",
        venue: "Mon, 13 May 2019, 8:00pm"
      }
    ];
    return (
      <View
        style={{
          marginHorizontal: 20
        }}
      >
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <Button
              style={[
                UtilStyles.buttonMyPurchase,
                { height: 100, marginTop: 10, padding: 10 }
              ]}
              onPress={() => Actions.BookFacilitiesDetails({ item: item })}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%"
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.desc}
                  </Text>
                  <Text style={[UtilStyles.standardText]}>{item.title}</Text>
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Text style={[UtilStyles.smallText]}>Date Of Purchase</Text>
                  <Text style={[UtilStyles.smallText]}>{item.venue}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.01,
                  height: "100%",
                  backgroundColor: Color.yellow_psm,
                  marginHorizontal: 10
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: "100%"
                }}
              >
                <View style={{ flex: 2, height: "100%" }}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    {item.rentType !== false ? (
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            UtilStyles.smallText,
                            {
                              fontWeight: "bold"
                            }
                          ]}
                        >
                          {item.rentType}
                        </Text>
                        <Text style={UtilStyles.smallText}>3</Text>
                      </View>
                    ) : (
                      <View />
                    )}

                    <View style={{ flex: 1 }}>
                      <Text
                        style={[
                          UtilStyles.smallText,
                          {
                            fontWeight: "bold"
                          }
                        ]}
                      >
                        Time
                      </Text>
                      <Text style={UtilStyles.smallText}>09.30pm</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text style={[UtilStyles.smallText, { color: "grey" }]}>
                      TOTAL
                    </Text>
                    <Text
                      style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50
                    }}
                    source={require("../../images/expImg/logoQr.png")}
                  />
                  <Text style={{ color: "grey", fontSize: 8, marginTop: 10 }}>
                    01010101
                  </Text>
                </View>
              </View>
            </Button>
          )}
        />
      </View>
    );
  };

  renderlistParking = () => {
    var temp = [
      {
        title: "Gate A",
        day: "2 Days",
        price: "RM 2.00",
        venue: "Mon, 13 May 2019, 8:00pm"
      },
      {
        title: "Gate B",
        day: "1 Days",
        price: "RM 2.00",
        venue: "Mon, 13 May 2019, 8:00pm"
      }
    ];
    return (
      <View
        style={{
          marginHorizontal: 20
        }}
      >
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <Button
              style={[
                UtilStyles.buttonMyPurchase,
                { height: 100, marginTop: 10, padding: 10 }
              ]}
              onPress={() => Actions.BookParkingDetails({ item: item })}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%"
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <Text style={UtilStyles.standardText}>Parking</Text>
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Text style={[UtilStyles.smallText]}>Date Of Purchase</Text>
                  <Text style={[UtilStyles.smallText]}>{item.venue}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.01,
                  height: "100%",
                  backgroundColor: Color.yellow_psm,
                  marginHorizontal: 10
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: "100%"
                }}
              >
                <View style={{ flex: 2, height: "100%" }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        UtilStyles.smallText,
                        {
                          fontWeight: "bold"
                        }
                      ]}
                    >
                      Validity
                    </Text>
                    <Text style={UtilStyles.smallText}>{item.day}</Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text style={[UtilStyles.smallText, { color: "grey" }]}>
                      TOTAL
                    </Text>
                    <Text
                      style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50
                    }}
                    source={require("../../images/expImg/logoQr.png")}
                  />
                  <Text style={{ color: "grey", fontSize: 8, marginTop: 10 }}>
                    01010101
                  </Text>
                </View>
              </View>
            </Button>
          )}
        />
      </View>
    );
  };

  renderPurchaseItems() {
    return (
      // <View style={{ paddingVertical: 20, marginBottom: 20 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}
        >
          <List>{this.renderlistEvent()}</List>
          {/* </ScrollView> */}
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <List>{this.renderlistMerch()}</List>
          {/* </ScrollView> */}

          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <List>{this.renderlistFNB()}</List>
        </ScrollView>
      // </View>
    );
  }

  renderBookings() {
    return (
      // <View style={{ paddingVertical: 20, marginBottom: 20 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}
        >
          <List>{this.renderlistFacilities()}</List>
          {/* </ScrollView> */}

          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <List>{this.renderlistParking()}</List>
        </ScrollView>
      // </View>
    );
  }

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <MyPurchaseHeader
          backButton={this.state.backButton}
          title="My Purchase"
        />

        {/* <ScrollView automaticallyAdjustContentInsets={true}> */}
          <Tabs
            locked={true}
            tabBarUnderlineStyle={{
              backgroundColor: Color.yellow_psm
            }}
          >
            <Tab
              heading="Items"
              tabStyle={{ backgroundColor: Color.material_grey_100 }}
              textStyle={[
                UtilStyles.standardTextWithIcon,
                { fontWeight: "bold", color: "grey" }
              ]}
              activeTabStyle={{ backgroundColor: "white" }}
              activeTextStyle={[
                UtilStyles.standardTextWithIcon,
                { fontWeight: "bold" }
              ]}
            >
              {this.renderPurchaseItems()}
            </Tab>
            <Tab
              heading="Bookings"
              tabStyle={{ backgroundColor: Color.material_grey_100 }}
              textStyle={[
                UtilStyles.standardTextWithIcon,
                { fontWeight: "bold", color: "grey" }
              ]}
              // activeTabStyle={{ backgroundColor: Color.material_grey_100 }}
              activeTabStyle={{ backgroundColor: "white" }}
              activeTextStyle={[
                UtilStyles.standardTextWithIcon,
                { fontWeight: "bold" }
              ]}
            >
              {this.renderBookings()}
            </Tab>
          </Tabs>
        {/* </ScrollView> */}

        <View
          style={{
            justifyContent: "center",
            margin: 20,
            alignItems: "center"
          }}
        >
          <Button
            style={UtilStyles.buttonFillWidthYellow}
            onPress={() => this.onHome()}
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextBlack}>Home</Text>
            </Body>
            <Right style={{ marginRight: 10 }}>
              <View style={UtilStyles.circleWhiteOnButton}>
                <Icon
                  size={20}
                  style={{
                    color: "black"
                  }}
                  name="ios-arrow-forward"
                />
              </View>
            </Right>
          </Button>
        </View>
      </View>
    );
  }
}
