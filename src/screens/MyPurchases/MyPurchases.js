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
import { Button, Left, Right, Card, List, Tab, Tabs } from "native-base";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { Actions } from "react-native-router-flux";
import MyPurchaseHeader from "./MyPurchaseHeader";

export default class MyPurchases extends Component {
  static onEnter = () => {
    Actions.refresh();
  };

  constructor(props) {
    super(props);
    this.state = {
      backButton: true
    };
  }

  componentWillMount() {
    // console.log(this.props.ticketData);
    // console.log(this.props.catData);
    // this.initial();
  }

  componentWillUnmount() {
    console.log("unMount");
    BackHandler.removeEventListener(
      "hardwareBackPress",
      () => this.handleBackButton
    );
  }
  componentDidMount() {
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

  handleBackButton() {
    return true;
  }

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
              onPress={() => Actions.QRCodeDetails({ item: item })}
            >
              <View>
                <Card style={{ marginLeft: 10, borderRadius: 10 }}>
                  <Image
                    style={{
                      width: 110,
                      resizeMode: "stretch",
                      height: 175,
                      borderRadius: 10
                    }}
                    source={item.poster}
                    rkCardImgOverlay
                  />
                  {/* <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "white",
                      position: "absolute",
                      alignSelf: "flex-end",
                      padding: 2,
                      borderRadius: 2,
                      marginRight: 5,
                      marginTop: 5
                    }}
                  >
                    <Text style={UtilStyles.standardText}>MON</Text>
                    <Text
                      style={[UtilStyles.titleText, { fontWeight: "bold" }]}
                    >
                      13
                    </Text>
                    <Text style={UtilStyles.standardText}>MAY</Text>
                  </View> */}

                  {/* <View
                    style={{
                      alignItems: "center",
                      backgroundColor: Color.yellow_psm,
                      position: "absolute",
                      alignSelf: "flex-end",
                      justifyContent: "flex-end",
                      padding: 2,
                      borderRadius: 2,
                      marginTop: 5
                    }}
                  >
                    <Text
                      style={[UtilStyles.titleText, { fontWeight: "bold" }]}
                    >
                      PAID
                    </Text>
                  </View> */}
                </Card>
                <View
                  style={{
                    width: 110,
                    paddingHorizontal: 10,
                    marginLeft: 10
                  }}
                >
                  <Text
                    numberOfLines={2}
                    style={[UtilStyles.standardText, { textAlign: "center" }]}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
        price: "RM90.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/jersey2.jpg"),
        title: "Jersey Malaysia",
        price: "RM90.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/jersey3.jpg"),
        title: "Jersey Malaysia",
        price: "RM90.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/jersey4.jpg"),
        title: "Jersey Malaysia",
        price: "RM90.00",
        star: "4.9"
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
              onPress={() => Actions.MyMerchDetails({ item: item })}
            >
              <View>
                <Card
                  style={{
                    marginLeft: 10,
                    borderRadius: 10,
                    width: 110,
                    height: 175,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {/* <Card style={{ marginLeft: 10, borderRadius: 10 }}> */}
                  <Image
                    style={{
                      width: 100,
                      resizeMode: "stretch",
                      height: 110,
                      borderRadius: 10
                    }}
                    source={item.image}
                    rkCardImgOverlay
                  />
                  {/* <View
                    style={{
                      alignItems: "center",
                      backgroundColor: Color.yellow_psm,
                      position: "absolute",
                      alignSelf: "flex-end",
                      justifyContent: "flex-start",
                      padding: 2,
                      borderRadius: 2,
                      marginTop: 5
                    }}
                  >
                    <Text
                      style={[UtilStyles.titleText, { fontWeight: "bold" }]}
                    >
                      PAID
                    </Text>
                  </View> */}
                </Card>
                <View
                  style={{
                    width: 110,
                    paddingHorizontal: 10,
                    marginLeft: 10
                  }}
                >
                  <Text
                    numberOfLines={2}
                    style={[UtilStyles.standardText, { textAlign: "center" }]}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
        price: "RM24.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/meal4.jpg"),
        title: "Set 4",
        price: "RM24.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/meal5.jpg"),
        title: "Set 5",
        price: "RM24.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/meal6.jpg"),
        title: "Set 6",
        price: "RM24.00",
        star: "4.9"
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
              onPress={() => Actions.MyFNBDetails({ item: item })}
            >
              <View>
                <Card
                  style={{
                    marginLeft: 10,
                    borderRadius: 10,
                    width: 110,
                    height: 175,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    style={{
                      width: 100,
                      resizeMode: "stretch",
                      height: 110,
                      borderRadius: 10
                    }}
                    source={item.image}
                    rkCardImgOverlay
                  />
                  {/* <View
                    style={{
                      alignItems: "center",
                      backgroundColor: Color.yellow_psm,
                      position: "absolute",
                      alignSelf: "flex-end",
                      justifyContent: "flex-end",
                      padding: 2,
                      borderRadius: 2,
                      marginTop: 5
                    }}
                  >
                    <Text
                      style={[UtilStyles.titleText, { fontWeight: "bold" }]}
                    >
                      PAID
                    </Text>
                  </View> */}
                </Card>
                <View
                  style={{
                    width: 110,
                    paddingHorizontal: 10,
                    marginLeft: 10
                  }}
                >
                  <Text
                    numberOfLines={2}
                    style={[UtilStyles.standardText, { textAlign: "center" }]}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
        price: "RM 90.00/hour",
        type: "Business",
        rentType: "Room"
      },
      {
        image: require("../../images/expImg/pool.jpg"),
        title: "Swimming Pool",
        desc: "National Aquatiq Centre",
        price: "RM 90.00/hour",
        type: "Activity",
        rentType: false
      },
      {
        image: require("../../images/expImg/basketball.jpg"),
        title: "Basketball Court",
        desc: "National Aquatiq Centre",
        price: "RM 90.00/hour",
        type: "Activity",
        rentType: "Court"
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
              onPress={() => Actions.BookFacilitiesDetails({ item: item })}
            >
              <View>
                <Card style={{ marginLeft: 10, borderRadius: 10 }}>
                  <Image
                    style={{
                      width: 110,
                      resizeMode: "cover",
                      height: 175,
                      borderRadius: 10
                    }}
                    source={item.image}
                    rkCardImgOverlay
                  />
                  {/* <View
                    style={{
                      alignItems: "center",
                      backgroundColor: Color.yellow_psm,
                      position: "absolute",
                      alignSelf: "flex-end",
                      justifyContent: "flex-end",
                      padding: 2,
                      borderRadius: 2,
                      marginTop: 5
                    }}
                  >
                    <Text
                      style={[UtilStyles.titleText, { fontWeight: "bold" }]}
                    >
                      PAID
                    </Text>
                  </View> */}
                </Card>
                <View
                  style={{
                    width: 110,
                    paddingHorizontal: 10,
                    marginLeft: 10
                  }}
                >
                  <Text
                    numberOfLines={2}
                    style={[UtilStyles.standardText, { textAlign: "center" }]}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
        price: "RM 2/hour"
      },
      {
        title: "Gate B",
        day: "1 Days",
        price: "RM 2/hour"
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
              onPress={() => Actions.BookParkingDetails({ item: item })}
            >
              <View>
                <Card
                  style={{
                    marginLeft: 10,
                    borderRadius: 10,
                    width: 110,
                    height: 175,
                    borderRadius: 10,
                    backgroundColor: Color.material_grey_100,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={[
                      UtilStyles.standardText,
                      { fontWeight: "bold", fontSize: 20 }
                    ]}
                  >
                    {item.title}
                  </Text>
                  {/* <View
                    style={{
                      alignItems: "center",
                      backgroundColor: Color.yellow_psm,
                      position: "absolute",
                      alignSelf: "flex-end",
                      justifyContent: "flex-end",
                      padding: 2,
                      borderRadius: 2,
                      marginTop: 5
                    }}
                  >
                    <Text
                      style={[UtilStyles.titleText, { fontWeight: "bold" }]}
                    >
                      PAID
                    </Text>
                  </View> */}
                </Card>
                <View
                  style={{
                    width: 110,
                    paddingHorizontal: 10,
                    marginLeft: 10
                  }}
                >
                  <Text
                    numberOfLines={2}
                    style={[UtilStyles.standardText, { textAlign: "center" }]}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };

  renderPurchaseItems() {
    return (
      <View style={{ paddingVertical: 20, marginBottom: 20 }}>
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
              Tickets
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
              Merchandise
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
          <List>{this.renderlistMerch()}</List>
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
              Food & Beverage
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
          <List>{this.renderlistFNB()}</List>
        </ScrollView>
      </View>
    );
  }

  renderBookings() {
    return (
      <View style={{ paddingVertical: 20, marginBottom: 20 }}>
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
              Facilities
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
          <List>{this.renderlistFacilities()}</List>
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
              Parking
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
          <List>{this.renderlistParking()}</List>
        </ScrollView>
      </View>
    );
  }

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <MyPurchaseHeader
          backButton={this.state.backButton}
          title="My Purchase"
        />

        <ScrollView automaticallyAdjustContentInsets={true}>
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
        </ScrollView>
      </View>
    );
  }
}
