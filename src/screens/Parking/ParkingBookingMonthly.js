import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  FlatList,
  WebView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { UtilStyles } from "../../style/styles";
import {
  Button,
  Left,
  Right,
  Body,
  List,
  Footer,
  Input,
  Picker
} from "native-base";
import { Actions } from "react-native-router-flux";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import TicketListHeader from "../Tickets/TicketListHeader";
var { height, width } = Dimensions.get("window");
import CalendarPicker from "react-native-calendar-picker";

var dataCart = {
  image: require("../../images/expImg/park.jpg"),
  desc: "Stadium National Bukit Jalil",
  price: "RM 2.00",
  rentType: "Gate",
  title: "Daily Parking",
  type: ""
};
export default class ParkingBookingMonthly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      modalVisible: false,
      temp: [],
      quantity: 0,
      selectedMonth: "",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Disember"
      ]
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onValueChangeMonth(value) {
    this.setState({
      selectedMonth: value
    });
  }
  onButtonPress = () => {
    Actions.TicketSectionSelection();
  };

  onButtonMinus = () => {
    var q = this.state.quantity;
    if (q < 1) {
      return;
    } else {
      q--;
    }
    this.setState({
      quantity: q
    });
  };
  onButtonPlus = () => {
    var q = this.state.quantity;
    q++;
    this.setState({
      quantity: q
    });
  };

  componentWillMount() {
    var type = "Gate";
    var temp = [];
    for (var i = 0; i < 4; i++) {
      temp.push({
        index: i,
        title: type + " " + (i + 1),
        selected: 0
      });
    }
    this.setState({
      temp: temp,
      refresh: !this.state.refresh
    });
  }
  componentDidMount() {
    console.log("item", this.props.item);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
      modalVisible: true
    });
  }

  onSelectedCourt = index => {
    console.log(index);
    var temp = this.state.temp;
    for (var i in temp) {
      temp[i]["selected"] = 0;
    }
    for (var i in temp) {
      if (temp[i]["index"] == index) {
        temp[i]["selected"] = 1;
      }
    }
    console.log(temp);
    this.setState({
      temp: temp,
      refresh: !this.state.refresh
    });
    this.forceUpdate();
  };

  renderSelectedButton = i => {
    console.log("Hit", i);
    if (i.selected == 1) {
      return (
        <Button
          small
          style={[
            UtilStyles.btnWhite,
            { margin: 5, backgroundColor: Color.yellow_psm }
          ]}
        >
          <Text style={UtilStyles.btnTextBlack}>{i.title}</Text>
        </Button>
      );
    } else {
      return (
        <Button
          onPress={() => this.onSelectedCourt(i.index)}
          small
          style={[UtilStyles.btnWhite, { margin: 5 }]}
        >
          <Text style={UtilStyles.btnTextBlack}>{i.title}</Text>
        </Button>
      );
    }
  };

  renderlistCourt = () => {
    var temp = this.state.temp;

    return (
      <View>
        <FlatList
          numColumns={4}
          extraData={this.state.refresh}
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => this.renderSelectedButton(item)}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <StatusBar backgroundColor={"transparent"} translucent />
        <TicketListHeader header_text="Book Parking" rkCardImgOverlay />
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
              source={{
                uri: "https://demo.stubapp.com/svg-example/parking.html"
              }}
              automaticallyAdjustContentInsets={true}
              style={{ width: width, height: 300 }}
              scalesPageToFit={true}
              onMessage={m => this.onMessage(m)}
            />
          </View>

          <View style={{ margin: 20 }}>
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Select Parking
            </Text>
            <ScrollView
              automaticallyAdjustContentInsets={true}
              style={UtilStyles.container}
            >
              <List style={{ marginTop: 10 }}>{this.renderlistCourt()}</List>
            </ScrollView>
          </View>

          <View style={{ marginHorizontal: 20, marginTop: 10 }}>
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Select Parking
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 10 }}>
            <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
              <Left
                style={{
                  flex: 1
                }}
              >
                <Text style={UtilStyles.standardText}>Plate Number</Text>
              </Left>
              <Right
                style={{
                  flex: 1,
                  flexDirection: "row-reverse"
                }}
              >
                <Input
                  style={UtilStyles.formInputStandard}
                  placeholder="Plate Number"
                  // onChangeText={val => this.onChangeText("email", val)}
                  // value={this.state.email}
                />
              </Right>
            </View>
          </View>

          <View style={{ marginHorizontal: 20, marginTop: 10 }}>
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Select Month
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 10 }}>
            <View style={{ marginHorizontal: 20 }}>
              <View style={UtilStyles.formInputStandard}>
                <Picker
                  style={{
                    width: "100%",
                    height: 40,
                    alignItems: "center"
                  }}
                  textStyle={UtilStyles.standardText}
                  placeholder="Month"
                  placeholderStyle={{ color: "grey" }}
                  placeholderIconColor="black"
                  mode="dropdown"
                  iosIcon={
                    <Icon
                      name="ios-arrow-down"
                      size={20}
                      style={{ marginLeft: -70 }}
                    />
                  }
                  headerStyle={{ backgroundColor: Color.yellow_psm }}
                  headerBackButtonTextStyle={{ color: "black" }}
                  headerTitleStyle={{ color: "black" }}
                  selectedValue={this.state.selectedMonth}
                  onValueChange={this.onValueChangeMonth.bind(this)}
                >
                  {this.state.months.map((item, index) => {
                    return (
                      <Picker.Item key={index} label={item} value={item} />
                    );
                  })}
                </Picker>
              </View>
            </View>

            {/* <View>
            <Text>SELECTED DATE:{startDate}</Text>
          </View> */}
          </View>

          {/* <View style={{ marginHorizontal: 20 }}>
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Select Quantity
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 10 }}>
            <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
              <Left
                style={{
                  flex: 1
                }}
              >
                <Text style={UtilStyles.standardText}>Quantity</Text>
              </Left>
              <Right
                style={{
                  flex: 1,
                  flexDirection: "row-reverse"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Left style={{ flex: 1, alignItems: "flex-end" }}>
                    <TouchableOpacity
                      style={UtilStyles.circleGreyOnButton}
                      onPress={this.onButtonMinus}
                    >
                      <Icon2
                        size={15}
                        style={{
                          color: Color.material_grey_600
                        }}
                        name="minus"
                      />
                    </TouchableOpacity>
                  </Left>
                  <Body style={{ flex: 0.6, alignItems: "flex-end" }}>
                    <Text style={UtilStyles.buttonTextBlack}>
                      {this.state.quantity}
                    </Text>
                  </Body>
                  <Right style={{ flex: 1, alignItems: "flex-end" }}>
                    <TouchableOpacity
                      style={UtilStyles.circleGreyOnButton}
                      onPress={this.onButtonPlus}
                    >
                      <Icon2
                        size={15}
                        style={{
                          color: Color.material_grey_600
                        }}
                        name="plus"
                      />
                    </TouchableOpacity>
                  </Right>
                </View>
              </Right>
            </View>
          </View> */}
        </ScrollView>
        <Footer
          style={{
            width: "100%",
            height: 80,
            paddingHorizontal: 20,
            paddingTop: 10,
            backgroundColor: "white",
            borderTopWidth: 0,
            elevation: 0
          }}
        >
          {/* <View style={{ marginVertical: 20 , flexDirection: "row"}}> */}
          <View style={{ flex: 1, paddingRight: 5, paddingBottom: 10 }}>
            <Text style={[UtilStyles.standardText, { color: "grey" }]}>
              TOTAL
            </Text>
            <Text style={[UtilStyles.titleText, { fontWeight: "bold" }]}>
              RM 4.00
            </Text>
            <Text style={UtilStyles.standardText}>Without SST Tax</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 5, paddingBottom: 10 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() =>
                Actions.Checkout({ item: "parking", data: dataCart })
              }
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Make Payment</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
                <View style={UtilStyles.circleWhiteOnButton}>
                  <Icon
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
          {/* </View> */}
        </Footer>
      </View>
    );
  }
}
