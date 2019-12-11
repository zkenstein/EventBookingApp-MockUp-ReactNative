import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  FlatList,
  Modal,
  TouchableHighlight
} from "react-native";
import { UtilStyles } from "../../style/styles";
import { Button, Left, Right, Body, List, Footer } from "native-base";
import { Actions } from "react-native-router-flux";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import BusinessList from "./BusinessList";
import ActivityList from "./ActivityList";
import TimeSlot from "./TimeSlot";

import CalendarPicker from "react-native-calendar-picker";
import FloatingBackButton from "../../components/FloatingBackButton";

export default class ArenaFacilitiesBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      modalVisible: false,
      temp: []
    };

    this.onDateChange = this.onDateChange.bind(this);
  }
  componentWillMount() {
    var type = this.props.item.rentType;
    var temp = [];
    for (var i = 0; i < 8; i++) {
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

  setModalVisible = () => {
    var show = this.state.modalVisible;
    show = !show;
    this.setState({
      modalVisible: show
    });
  };

  // setModalVisible = visible => {
  //   this.setState({ modalVisible: visible });
  // };
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
      modalVisible: true
    });
  }
  onButtonPress = () => {
    Actions.TicketSectionSelection();
  };

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
  componentDidMount() {
    console.log("item", this.props.item);
  }

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
    console.log(temp);

    return (
      <View>
        <FlatList
          numColumns={4}
          data={temp}
          extraData={this.state.refresh}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => this.renderSelectedButton(item)}
        />
      </View>
    );
  };

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={UtilStyles.containerJustifyCenter}>
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

          <View style={{ margin: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={UtilStyles.standardText}>8:00am - 10:00pm</Text>
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
          </View>

          <View style={[UtilStyles.hr, { marginHorizontal: 15 }]} />

          {this.props.item.rentType === false ? (
            <View />
          ) : (
            <View style={{ margin: 20 }}>
              <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                Select {this.props.item.rentType}
              </Text>
              <ScrollView
                automaticallyAdjustContentInsets={true}
                style={UtilStyles.container}
              >
                <List style={{ marginTop: 10 }}>{this.renderlistCourt()}</List>
              </ScrollView>
            </View>
          )}

          <View style={{ marginHorizontal: 20, marginTop: 10 }}>
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Select Booking Date
            </Text>
          </View>
          <View>
            <CalendarPicker
              onDateChange={this.onDateChange}
              selectedDayColor={Color.yellow_psm}
            />

            {/* <View>
            <Text>SELECTED DATE:{startDate}</Text>
          </View> */}
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible();
            }}
          >
            <TimeSlot closeModal={this.setModalVisible} />
          </Modal>
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
              RM 360.00
            </Text>
            <Text style={UtilStyles.standardText}>Without SST Tax</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 5, paddingBottom: 10 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() =>
                Actions.Checkout({ item: "facilities", data: this.props.item })
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
