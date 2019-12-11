import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Modal,
  Image
} from "react-native";
import { Button, Left, Right, Body, Input, Textarea } from "native-base";
import MyAccountHeader from "../MyAccount/MyAccountHeader";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";
import Overlay from "react-native-modal-overlay";
import { Rating } from "react-native-ratings";
import PrivacyPolicy from "./PrivacyPolicy";
import FAQ from "./FAQ";
import NotificationSettings from "./NotificationSettings";

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupRate: false,
      popupInvite: false,
      popupSuggest: false,
      popupSupport: false,
      modalPolicy: false,
      modalFAQ: false,
      modalNotification: false
    };
  }

  setModalNotification = () => {
    var show = this.state.modalNotification;
    show = !show;
    this.setState({ modalNotification: show });
  };

  renderModalNotification() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalNotification}
        onRequestClose={() => {
          this.setModalNotification();
        }}
      >
        <NotificationSettings toggleModal={this.setModalNotification} />
      </Modal>
    );
  }

  setModalFAQ = () => {
    var show = this.state.modalFAQ;
    show = !show;
    this.setState({ modalFAQ: show });
  };

  renderModalFAQ() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalFAQ}
        onRequestClose={() => {
          this.setModalFAQ();
        }}
      >
        <FAQ toggleModal={this.setModalFAQ} />
      </Modal>
    );
  }

  setModalPolicy = () => {
    var show = this.state.modalPolicy;
    show = !show;
    this.setState({ modalPolicy: show });
  };

  renderModalPolicy() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalPolicy}
        onRequestClose={() => {
          this.setModalPolicy();
        }}
      >
        <PrivacyPolicy toggleModal={this.setModalPolicy} />
      </Modal>
    );
  }

  setPopupSupport = () => {
    var show = this.state.popupSupport;
    show = !show;
    this.setState({ popupSupport: show });
  };

  renderPopupSupport() {
    return (
      <Overlay
        visible={this.state.popupSupport}
        closeOnTouchOutside={false}
        onRequestClose={() => this.setPopupSupport()}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        childrenWrapperStyle={{ backgroundColor: "transparent" }}
        animationDuration={500}
        animationType="slideInUp"
      >
        <View
          style={{
            height: 200,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          <Icon2
            name="md-close"
            size={25}
            color="black"
            style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 10 }}
            onPress={() => {
              this.setPopupSupport();
            }}
          />
          <Text style={[UtilStyles.standardText, { paddingTop: 20 }]}>
            Customer Support
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Icon
              name="whatsapp"
              size={30}
              color="#25D366"
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            />
            <Icon
              name="facebook"
              size={30}
              color="#3b5999"
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            />
            <Icon
              name="twitter"
              size={30}
              color="#55acee"
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            />
            <Icon
              name="instagram"
              size={30}
              color="#833AB4"
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            />
          </View>
        </View>
      </Overlay>
    );
  }

  setPopupSuggest = () => {
    var show = this.state.popupSuggest;
    show = !show;
    this.setState({ popupSuggest: show });
  };

  renderPopupSuggest() {
    return (
      <Overlay
        visible={this.state.popupSuggest}
        closeOnTouchOutside={false}
        onRequestClose={() => this.setPopupSuggest()}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        childrenWrapperStyle={{ backgroundColor: "transparent" }}
        animationDuration={500}
        animationType="slideInUp"
      >
        <View
          style={{
            height: 200,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          <Icon2
            name="md-close"
            size={25}
            color="black"
            style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 10 }}
            onPress={() => {
              this.setPopupSuggest();
            }}
          />
          <Text style={[UtilStyles.standardText, { paddingTop: 10 }]}>
            Any suggestion or feedback of this app?
          </Text>

          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              width: "100%"
            }}
          >
            <Textarea
              rowSpan={4}
              bordered
              placeholder="Type something ..."
              style={[UtilStyles.standardText, { width: "100%" }]}
            />
          </View>
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
              onPress={() => this.setPopupRate()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Send</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
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
          <View style={{ flex: 0.3 }} />
        </View>
      </Overlay>
    );
  }

  setPopupInvite = () => {
    var show = this.state.popupInvite;
    show = !show;
    this.setState({ popupInvite: show });
  };

  renderPopupInvite() {
    return (
      <Overlay
        visible={this.state.popupInvite}
        closeOnTouchOutside={false}
        onRequestClose={() => this.setPopupInvite()}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        childrenWrapperStyle={{ backgroundColor: "transparent" }}
        animationDuration={500}
        animationType="slideInUp"
      >
        <View
          style={{
            height: 200,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          <Icon2
            name="md-close"
            size={25}
            color="black"
            style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 10 }}
            onPress={() => {
              this.setPopupInvite();
            }}
          />
          <Text style={[UtilStyles.standardText, { paddingTop: 20 }]}>
            Invite Friends
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Icon
              name="whatsapp"
              size={30}
              color="#25D366"
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            />
            <Icon
              name="facebook"
              size={30}
              color="#3b5999"
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            />
            <Icon
              name="twitter"
              size={30}
              color="#55acee"
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            />
            <Icon
              name="instagram"
              size={30}
              color="#833AB4"
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            />
          </View>
        </View>
      </Overlay>
    );
  }

  setPopupRate = () => {
    var show = this.state.popupRate;
    show = !show;
    this.setState({ popupRate: show });
  };

  renderPopupRate() {
    return (
      <Overlay
        visible={this.state.popupRate}
        closeOnTouchOutside={false}
        onRequestClose={() => this.setPopupRate()}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        childrenWrapperStyle={{ backgroundColor: "transparent" }}
        animationDuration={500}
        animationType="slideInUp"
      >
        <View
          style={{
            height: 200,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          <Icon2
            name="md-close"
            size={25}
            color="black"
            style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 10 }}
            onPress={() => {
              this.setPopupRate();
            }}
          />

          <Text style={[UtilStyles.standardText, { paddingTop: 10 }]}>
            How do you rate our app?
          </Text>
          <Rating style={{ paddingTop: 30 }} />
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
              onPress={() => this.setPopupRate()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Send</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
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
          <View style={{ flex: 0.3 }} />
        </View>
      </Overlay>
    );
  }

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <MyAccountHeader rkCardImgOverlay />

        <View
          style={{
            marginHorizontal: 20,
            marginTop: -20
          }}
        >
          <Button
            style={UtilStyles.buttonOnMyAccount}
            onPress={() => Actions.MyPurchase()}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                margin: 10
              }}
              source={require("../../images/Icon/purchase.png")}
            />
            <Text style={UtilStyles.standardTextWithIconYellow}>
              My Purchase
            </Text>
          </Button>
        </View>

        <ScrollView>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10
            }}
          >
            <Button
              style={UtilStyles.buttonOnMyAccount}
              onPress={() => Actions.SeasonParkingCard()}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                  margin: 10
                }}
                source={require("../../images/Icon/parking.png")}
              />
              <Text style={UtilStyles.standardTextWithIconYellow}>
                Season Parking
              </Text>
            </Button>
          </View>

          {/* 1st */}
          <View style={UtilStyles.viewOuterList}>
            <TouchableWithoutFeedback onPress={() => this.setPopupInvite()}>
              <View style={UtilStyles.viewEachButtonList}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10
                  }}
                  source={require("../../images/Icon/invite.png")}
                />
                <Text style={UtilStyles.standardTextWithIcon}>
                  Invite Friends
                </Text>

                <Right>
                  <View
                    style={[UtilStyles.smallCircleGreyOnButton, { margin: 10 }]}
                  >
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="ios-arrow-forward"
                      onPress={() => this.onButtonPress()}
                    />
                  </View>
                </Right>
              </View>
            </TouchableWithoutFeedback>
            {/* <View style={UtilStyles.hr} /> */}

            <TouchableWithoutFeedback onPress={() => this.setPopupSupport()}>
              <View style={UtilStyles.viewEachButtonList}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10
                  }}
                  source={require("../../images/Icon/support.png")}
                />
                <Text style={UtilStyles.standardTextWithIcon}>
                  Customer Support
                </Text>

                <Right>
                  <View
                    style={[UtilStyles.smallCircleGreyOnButton, { margin: 10 }]}
                  >
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="ios-arrow-forward"
                      onPress={() => this.onButtonPress()}
                    />
                  </View>
                </Right>
              </View>
            </TouchableWithoutFeedback>
            {/* <View style={UtilStyles.hr} /> */}

            <TouchableWithoutFeedback onPress={() => this.setPopupRate()}>
              <View style={UtilStyles.viewEachButtonList}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10
                  }}
                  source={require("../../images/Icon/rate.png")}
                />
                <Text style={UtilStyles.standardTextWithIcon}>
                  Rate Our App
                </Text>

                <Right>
                  <View
                    style={[UtilStyles.smallCircleGreyOnButton, { margin: 10 }]}
                  >
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="ios-arrow-forward"
                      onPress={() => this.onButtonPress()}
                    />
                  </View>
                </Right>
              </View>
            </TouchableWithoutFeedback>
            {/* <View style={UtilStyles.hr} /> */}

            <TouchableWithoutFeedback onPress={() => this.setPopupSuggest()}>
              <View style={UtilStyles.viewEachButtonList}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10
                  }}
                  source={require("../../images/Icon/suggest.png")}
                />
                <Text style={UtilStyles.standardTextWithIcon}>
                  Make a Suggestion
                </Text>

                <Right>
                  <View
                    style={[UtilStyles.smallCircleGreyOnButton, { margin: 10 }]}
                  >
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="ios-arrow-forward"
                      onPress={() => this.onButtonPress()}
                    />
                  </View>
                </Right>
              </View>
            </TouchableWithoutFeedback>
            {/* <View style={UtilStyles.hr} /> */}
          </View>

          {/* 2nd */}
          {/* <View style={UtilStyles.viewOuterList}>
            <View style={UtilStyles.viewEachButtonList}>
              <Icon3 size={20} style={UtilStyles.standardIcon} name="place" />
              <Text style={UtilStyles.standardTextWithIcon}>
                Shipping Address
              </Text>
            </View>

            <View style={UtilStyles.viewEachButtonList}>
              <Icon
                size={20}
                style={UtilStyles.standardIcon}
                name="credit-card"
              />
              <Text style={UtilStyles.standardTextWithIcon}>
                Payment Method
              </Text>
            </View>

            <View style={UtilStyles.viewEachButtonList}>
              <Icon4 size={20} style={UtilStyles.standardIcon} name="wallet" />
              <Text style={UtilStyles.standardTextWithIcon}>Currency</Text>
            </View>

            <View style={UtilStyles.viewEachButtonList}>
              <Icon size={20} style={UtilStyles.standardIcon} name="language" />
              <Text style={UtilStyles.standardTextWithIcon}>Language</Text>
            </View>
          </View> */}

          {/* 3rd */}

          <View style={UtilStyles.viewOuterList}>
            <TouchableWithoutFeedback onPress={() => Actions.Address()}>
              <View style={UtilStyles.viewEachButtonList}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10,
                    resizeMode: "stretch"
                  }}
                  source={require("../../images/Icon/shipping.png")}
                />
                <Text style={UtilStyles.standardTextWithIcon}>
                  Shipping Address
                </Text>

                <Right>
                  <View
                    style={[UtilStyles.smallCircleGreyOnButton, { margin: 10 }]}
                  >
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="ios-arrow-forward"
                      onPress={() => this.onButtonPress()}
                    />
                  </View>
                </Right>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => this.setModalNotification()}
            >
              <View style={UtilStyles.viewEachButtonList}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10,
                    resizeMode: "stretch"
                  }}
                  source={require("../../images/Icon/bell.png")}
                />
                <Text style={UtilStyles.standardTextWithIcon}>
                  Notification Settings
                </Text>

                <Right>
                  <View
                    style={[UtilStyles.smallCircleGreyOnButton, { margin: 10 }]}
                  >
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="ios-arrow-forward"
                      onPress={() => this.onButtonPress()}
                    />
                  </View>
                </Right>
              </View>
            </TouchableWithoutFeedback>

            {/* <View style={UtilStyles.hr} /> */}

            <TouchableWithoutFeedback onPress={() => this.setModalPolicy()}>
              <View style={UtilStyles.viewEachButtonList}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10,
                    resizeMode: "stretch"
                  }}
                  source={require("../../images/Icon/privacy.png")}
                />
                <Text style={UtilStyles.standardTextWithIcon}>
                  Privacy Policy
                </Text>

                <Right>
                  <View
                    style={[UtilStyles.smallCircleGreyOnButton, { margin: 10 }]}
                  >
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="ios-arrow-forward"
                      onPress={() => this.onButtonPress()}
                    />
                  </View>
                </Right>
              </View>
            </TouchableWithoutFeedback>
            {/* <View style={UtilStyles.hr} /> */}

            <TouchableWithoutFeedback onPress={() => this.setModalFAQ()}>
              <View style={UtilStyles.viewEachButtonList}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10,
                    resizeMode: "stretch"
                  }}
                  source={require("../../images/Icon/faq.png")}
                />
                <Text style={UtilStyles.standardTextWithIcon}>
                  Frequently Asked Questions
                </Text>

                <Right>
                  <View
                    style={[UtilStyles.smallCircleGreyOnButton, { margin: 10 }]}
                  >
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="ios-arrow-forward"
                      onPress={() => this.onButtonPress()}
                    />
                  </View>
                </Right>
              </View>
            </TouchableWithoutFeedback>
            {/* <View style={UtilStyles.hr} /> */}

            {/* <View style={UtilStyles.viewEachButtonList}>
              <Icon2
                size={20}
                style={UtilStyles.standardIcon}
                name="md-paper"
              />
              <Text style={UtilStyles.standardTextWithIcon}>
                Legal Information
              </Text>
            </View> */}
            {/* <View style={UtilStyles.hr} /> */}
          </View>
          <View
            style={{
              justifyContent: "center",
              margin: 20,
              alignItems: "center"
            }}
          >
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => this.onButtonPress()}
            >
              <Left style={{ flex: 1 }} />
              <Body style={{ flex: 3, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Log out</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
                <View style={UtilStyles.circleBlackOnButton}>
                  <Icon2
                    size={20}
                    style={{
                      color: Color.yellow_psm
                    }}
                    name="ios-arrow-forward"
                    onPress={() => this.onButtonPress()}
                  />
                </View>
              </Right>
            </Button>
          </View>
        </ScrollView>
        {this.renderPopupInvite()}
        {this.renderPopupRate()}
        {this.renderPopupSuggest()}
        {this.renderPopupSupport()}
        {this.renderModalPolicy()}
        {this.renderModalFAQ()}
        {this.renderModalNotification()}
      </View>
    );
  }
}
