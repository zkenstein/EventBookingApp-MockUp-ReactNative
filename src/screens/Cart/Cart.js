import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Modal
} from "react-native";
import {
  Left,
  Right,
  ListItem,
  Button,
  Header,
  Body,
  Footer,
  Container,
  List,
  Content
} from "native-base";
import CartHeader from "./CartHeader";
import { UtilStyles } from "../../style/styles";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Color from "../../config/colors.json";
import { Actions } from "react-native-router-flux";

import CartModal from "./CartModal";
import ParkingModal from "./ParkingModal";
import MealModal from "./MealModal";
import InsuranceModal from "./InsuranceModal";
import MerchandiseModal from "./MerchandiseModal";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCartVisible: false,
      modalParkingVisible: false,
      modalInsuranceVisible: false,
      modalMealVisible: false,
      modalMerchVisible: false
    };
  }

  onButtonPress = () => {
    var show = this.state.modalCartVisible;
    show = !show;
    this.setState({
      modalCartVisible: show
    });
  };

  onToggleInsurance = () => {
    var show = this.state.modalInsuranceVisible;
    show = !show;
    this.setState({
      modalInsuranceVisible: show
    });
  };

  onToggleParking = () => {
    var show = this.state.modalParkingVisible;
    show = !show;
    this.setState({
      modalParkingVisible: show
    });
  };

  onToggleMerch = () => {
    var show = this.state.modalMerchVisible;
    show = !show;
    this.setState({
      modalMerchVisible: show
    });
  };

  onToggleMeal = () => {
    var show = this.state.modalMealVisible;
    show = !show;
    this.setState({
      modalMealVisible: show
    });
  };

  closeToCheckout = () => {
    this.onButtonPress();
    Actions.Checkout({ item: "event" });
  };

  renderCartModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalCartVisible}
        onRequestClose={() => {
          this.onButtonPress();
        }}
      >
        <CartModal toggleCart={this.onButtonPress} />
      </Modal>
    );
  }

  renderMerchModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalMerchVisible}
        onRequestClose={() => {
          this.onToggleMerch();
        }}
      >
        <MerchandiseModal toggleModal={this.onToggleMerch} />
      </Modal>
    );
  }

  renderMealModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalMealVisible}
        onRequestClose={() => {
          this.onToggleMeal();
        }}
      >
        <MealModal toggleModal={this.onToggleMeal} />
      </Modal>
    );
  }

  renderParkingModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalParkingVisible}
        onRequestClose={() => {
          this.onToggleParking();
        }}
      >
        <ParkingModal toggleModal={this.onToggleParking} />
      </Modal>
    );
  }

  renderInsuranceModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalInsuranceVisible}
        onRequestClose={() => {
          this.onToggleInsurance();
        }}
      >
        <InsuranceModal toggleModal={this.onToggleInsurance} />
      </Modal>
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
        <CartHeader rkCardImgOverlay />

        <View
          style={{
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableWithoutFeedback
            style={{ width: "100%" }}
            onPress={() => this.onButtonPress()}
          >
            <View
              style={{ flexDirection: "row", margin: 20, marginVertical: 10 }}
            >
              <Left>
                <Icon2 size={20} color="white" name="shopping-cart" />
              </Left>
              <Body
                style={{
                  flex: 6,
                  flexDirection: "row"
                }}
              >
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                  <Text style={[UtilStyles.titleText, { color: "white" }]}>
                    Cart
                  </Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text
                    style={[
                      UtilStyles.titleText,
                      {
                        fontWeight: "bold",
                        color: "white"
                      }
                    ]}
                  >
                    RM 360.00
                  </Text>
                </View>
              </Body>
              <Right>
                <Icon size={25} color="white" name="ios-arrow-down" />
              </Right>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView automaticallyAdjustContentInsets={true}>
          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0,
              marginBottom: 10
            }}
            onPress={() => this.onToggleParking()}
            avatar
          >
            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Add-on Parking
              </Text>

              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey"
                }}
              >
                No parking selected
              </Text>
            </Body>
            <Right style={{ paddingRight: 10 }}>
              <Icon
                size={25}
                style={{
                  color: "black"
                }}
                name="ios-arrow-forward"
                // onPress={() => this.onButtonPress()}
              />
            </Right>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0,
              marginBottom: 10
            }}
            onPress={() => this.onToggleMerch()}
            avatar
          >
            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Add-on Merchandise
              </Text>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey"
                }}
              >
                No merchandise selected
              </Text>
            </Body>
            <Right style={{ paddingRight: 10 }}>
              <Icon
                size={25}
                style={{
                  color: "black"
                }}
                name="ios-arrow-forward"
              />
            </Right>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0,
              marginBottom: 10
            }}
            onPress={() => this.onToggleMeal()}
            avatar
          >
            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Add-on Meals
              </Text>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey"
                }}
              >
                No meals selected
              </Text>
            </Body>
            <Right style={{ paddingRight: 10 }}>
              <Icon
                size={25}
                style={{
                  color: "black"
                }}
                name="ios-arrow-forward"
                onPress={() => this.onButtonPress()}
              />
            </Right>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0,
              marginBottom: 10
            }}
            onPress={() => this.onToggleInsurance()}
            avatar
          >
            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Add-on Insurance
              </Text>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey"
                }}
              >
                No insurance selected
              </Text>
            </Body>
            <Right style={{ paddingRight: 10 }}>
              <Icon
                size={25}
                style={{
                  color: "black"
                }}
                name="ios-arrow-forward"
                onPress={() => this.onButtonPress()}
              />
            </Right>
          </ListItem>

          {/* <View
            style={{ marginHorizontal: 20, marginTop: 30, marginBottom: 10 }}
          >
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Accommodation
            </Text>
          </View> */}
          {/* <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0,
              marginBottom: 10
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
                Book Hotel
              </Text>
            </Left>
            <Right style={{ alignItems: "flex-end" }}>
              <Icon
                size={25}
                style={{
                  color: "black"
                }}
                name="ios-arrow-forward"
                onPress={() => this.onButtonPress()}
              />
            </Right>
          </ListItem> */}
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
            onPress={() => Actions.Checkout({ item: "event" })}
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextBlack}>Checkout</Text>
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

        {this.renderCartModal()}
        {this.renderParkingModal()}
        {this.renderMerchModal()}
        {this.renderMealModal()}
        {this.renderInsuranceModal()}
      </View>
    );
  }
}
