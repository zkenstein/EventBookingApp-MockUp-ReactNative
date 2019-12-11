import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  WebView,
  StatusBar,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import { UtilStyles } from "../../style/styles";
import { Button, Left, Right, ListItem, Body, List } from "native-base";
import { Actions } from "react-native-router-flux";
import Color from "../../config/colors.json";
import IconBadge from "react-native-icon-badge";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import Overlay from "react-native-modal-overlay";
var { height, width } = Dimensions.get("window");
import TransparentHeader from "../../components/TransparentHeader";
var item = {};
import SocketIOClient from "socket.io-client";

export default class TicketSeatSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalConVisible: false,
      user: 0
    };
    // var socket = SocketIOClient("http://13.250.118.140:4200/");

    // var socket = SocketIOClient("http://174.138.90.111:4200/");


      
    // socket.emit("removeNative", { });
    // socket.on("users connected", data => {
    //   // console.log("hey")
      
    //   this.setState({ user: data });
    // });
    
  }
  onButtonPress = () => {
    this.setModalConVisible();
    // Actions.Cart();
  };

  componentWillMount() {
    if (!this.props.item) {
      item = {
        poster: require("../../images/lanyposter.jpg"),
        image: require("../../images/lany.jpg"),
        title: "Lany Malibu Nights World Tour",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      };
    } else {
      item = this.props.item;
    }
  }

  onCart = () => {
    Actions.Cart();
  };

  onMessage(m) {
    alert(m.nativeEvent.data);
  }

  renderlistCon = () => {
    var temp = [
      { concession_type: "Normal", concession_price: "RM 200" },
      { concession_type: "Kids", concession_price: "RM 150" },
      { concession_type: "OKU", concession_price: "RM 100" },
      { concession_type: "Senior", concession_price: "RM 90" }
    ];

    return (
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={temp}
          numColumns={2}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <Button small style={[UtilStyles.btnWhite, { margin: 5 }]}>
              <Text style={UtilStyles.btnTextBlack}>
                {item.concession_type}
              </Text>
              <Text
                style={[
                  UtilStyles.btnTextBlack,
                  { fontWeight: "bold", marginLeft: 5 }
                ]}
              >
                {item.concession_price}
              </Text>
            </Button>
          )}
        />
      </View>
    );
  };

  setModalConVisible = () => {
    var show = this.state.modalConVisible;
    show = !show;
    this.setState({ modalConVisible: show });
  };

  renderConcession() {
    return (
      <Overlay
        visible={this.state.modalConVisible}
        closeOnTouchOutside={false}
        onRequestClose={() => this.setModalConVisible()}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        childrenWrapperStyle={{ backgroundColor: "transparent" }}
        animationDuration={500}
        animationType="slideInUp"
      >
        <View
          style={{
            height: 350,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "baseline",
              marginBottom: 20,
              position: "absolute"
            }}
          >
            <Icon2
              name="md-close"
              size={25}
              color="black"
              onPress={() => {
                this.setModalConVisible();
              }}
            />
          </View>
          <Image
            style={{
              width: "100%",
              height: 180,
              resizeMode: "stretch",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}
            source={require("../../images/expImg/bukitjalil.jpg")}
          />

          <View
            style={{ margin: 20, marginBottom: 50, alignSelf: "flex-start" }}
          >
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Select Quantity
            </Text>
            {this.renderlistCon()}
          </View>

          {/* <List style={{ marginTop: 10 }}></List> */}
        </View>

        <View
          style={{
            justifyContent: "center",
            margin: 10,
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 0.3 }} />
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => this.onButtonPress()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Confirm</Text>
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
          <View style={{ flex: 0.3 }} />
        </View>
      </Overlay>
    );
  }

  render() {
    return (
      <View
        style={[
          UtilStyles.containerJustifyCenter,
          { backgroundColor: Color.material_grey_100 }
        ]}
      >
        {this.renderConcession()}
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
        <ScrollView automaticallyAdjustContentInsets={true}>
          <TransparentHeader
            header_text={item.title}
            header_sub={item.venue}
            rkCardImgOverlay
          />
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
                uri: "http://174.138.90.111:4200/"
              }}
              automaticallyAdjustContentInsets={true}
              style={{ width: width, height: 300 }}
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
            <Left style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Lato-Bold",
                  fontSize: 12
                }}
              >
                {/* {this.state.user} Views */}
              </Text>
            </Left>
            <Body style={{ flex: 1.5, flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Lato-Bold",
                  fontSize: 12
                }}
              >
                {/* 100 / 1000 Available */}
              </Text>
            </Body>

            <Right style={{ flex: -1, flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Lato-Bold",
                  fontSize: 12,
                  color: "red"
                }}
              >
                Duration : 10:00
              </Text>
            </Right>
          </View>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0,
              paddingLeft: 20
            }}
            onPress={() => this.setModalConVisible()}
          >
            <Left style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Section 301 - Row G - Seat 01
              </Text>
            </Left>
            <Right style={{ flex: -1, flexDirection: "row", marginRight: 5 }}>
              <Text style={UtilStyles.standardText}>RM 200</Text>
            </Right>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0,
              paddingLeft: 20
            }}
            onPress={() => this.setModalConVisible()}
          >
            <Left style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Section 301 - Row G - Seat 01
              </Text>
            </Left>
            <Right style={{ flex: -1, flexDirection: "row", marginRight: 5 }}>
              <Text style={UtilStyles.standardText}>RM 200</Text>
            </Right>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0,
              paddingLeft: 20
            }}
            onPress={() => this.setModalConVisible()}
          >
            <Left style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Section 301 - Row G - Seat 01
              </Text>
            </Left>
            <Right style={{ flex: -1, flexDirection: "row", marginRight: 5 }}>
              <Text style={UtilStyles.standardText}>RM 200</Text>
            </Right>
          </ListItem>
        </ScrollView>

        <View
          style={{
            justifyContent: "center",
            margin: 20,
            alignItems: "center"
          }}
        >
          <Button
            style={UtilStyles.buttonFillWidthYellow}
            onPress={() => this.onCart()}
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextBlack}>
                Continue ( 1/4 Selected )
              </Text>
            </Body>
            <Right style={{ marginRight: 10 }}>
              <View style={UtilStyles.circleWhiteOnButton}>
                <Icon2
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
