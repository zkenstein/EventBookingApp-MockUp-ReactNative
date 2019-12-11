import React, { Component } from "react";
import {
  Left,
  Right,
  Text,
  Card,
  Button,
  Body,
  List,
  Picker,
  Tab,
  Tabs,
  ListItem,
  Content
} from "native-base";
import {
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";
import ModalHeader from "./ModalHeader";
import Overlay from "react-native-modal-overlay";
import MerchandiseAddOnListModal from "./MerchandiseAddOnListModal";

class MerchandiseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAddOnListVisible: false,
      popupSize: false,
      selectedSize: "",
      lisOfSize: ["XS", "S", "M", "L", "XL"],
      quantity: 0
    };
  }

  onToggleAddOnList = () => {
    var show = this.state.modalAddOnListVisible;
    show = !show;
    this.setState({
      modalAddOnListVisible: show
    });
  };

  onConfirmMerch = () => {
    // this.onToggleAddOnList();
    this.props.toggleModal();
  };

  renderAddOnListModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.modalAddOnListVisible}
        onRequestClose={() => {
          this.onToggleAddOnList;
        }}
      >
        <MerchandiseAddOnListModal
          toggleCart={this.onToggleAddOnList}
          confirmAdd={this.onConfirmMerch}
        />
      </Modal>
    );
  }

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

  renderButton() {
    return (
      <Tabs
        tabBarUnderlineStyle={{
          backgroundColor: Color.yellow_psm
        }}
      >
        <Tab
          heading="Apparel"
          // tabStyle={{ backgroundColor: "white" }}
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
          <ScrollView
            automaticallyAdjustContentInsets={true}
            style={UtilStyles.container}
          >
            <List style={{ alignItems: "center" }}>
              {this.renderlistShop("apparel")}
            </List>
          </ScrollView>
        </Tab>
        <Tab
          heading="Accessories"
          // tabStyle={{ backgroundColor: "white" }}
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
          <ScrollView
            automaticallyAdjustContentInsets={true}
            style={UtilStyles.container}
          >
            <List style={{ alignItems: "center" }}>
              {this.renderlistShop("accessories")}
            </List>
          </ScrollView>
        </Tab>
        <Tab
          heading="Bags"
          // tabStyle={{ backgroundColor: "white" }}
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
          <List style={{ alignItems: "center" }}>
            {this.renderlistShop("bags")}
          </List>
        </Tab>
      </Tabs>
    );
  }

  renderlistShop = item => {
    if (item === "apparel") {
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
        },
        {
          image: require("../../images/expImg/jersey5.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          star: "4.9"
        },
        {
          image: require("../../images/expImg/jersey6.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          star: "4.9"
        }
      ];
    }

    if (item === "accessories") {
      var temp = [
        {
          image: require("../../images/expImg/jersey4.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          star: "4.9"
        },
        {
          image: require("../../images/expImg/jersey5.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          star: "4.9"
        },
        {
          image: require("../../images/expImg/jersey6.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          star: "4.9"
        }
      ];
    }

    if (item === "bags") {
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
          image: require("../../images/expImg/jersey6.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          star: "4.9"
        }
      ];
    }

    return (
      <View
        style={{
          alignItems: "center",
          paddingVertical: 10
        }}
      >
        <FlatList
          numColumns={2}
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              style={{ margin: 10 }}
              onPress={() => this.setPopupSizeVisible()}
            >
              <Card
                style={{
                  margin: 5,
                  height: 220,
                  width: 160,
                  justifyContent: "center",
                  borderRadius: 10,
                  borderWidth: 0
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 20
                  }}
                >
                  <Image
                    style={{
                      width: 100,
                      resizeMode: "stretch",
                      height: 120
                    }}
                    source={item.image}
                  />
                </View>

                <View style={{ margin: 10 }}>
                  <Text style={UtilStyles.standardText}>{item.title}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Left>
                      <Text
                        style={[
                          UtilStyles.standardText,
                          { fontWeight: "bold" }
                        ]}
                      >
                        {item.price}
                      </Text>
                    </Left>
                    <Right style={{ alignItems: "flex-end" }}>
                      <View
                        style={{
                          backgroundColor: "green",
                          borderRadius: 30,
                          paddingHorizontal: 5,
                          paddingVertical: 1,
                          flexDirection: "row"
                        }}
                      >
                        <Text
                          style={[
                            UtilStyles.standardText,
                            { color: "white", fontWeight: "bold", fontSize: 10 }
                          ]}
                        >
                          ADD
                        </Text>
                      </View>
                    </Right>
                  </View>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };

  setPopupSizeVisible = () => {
    var show = this.state.popupSize;
    show = !show;
    this.setState({ popupSize: show });
  };

  onValueChangeState(value) {
    this.setState({
      selectedSize: value
    });
  }

  renderPopupSize() {
    return (
      <Overlay
        visible={this.state.popupSize}
        closeOnTouchOutside={false}
        onRequestClose={() => this.setPopupSizeVisible()}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        childrenWrapperStyle={{ backgroundColor: "transparent" }}
        animationDuration={500}
        animationType="slideInUp"
      >
        <View
          style={{
            height: 300,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          <Icon
            name="md-close"
            size={25}
            color="black"
            style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 10 }}
            onPress={() => {
              this.setPopupSizeVisible();
            }}
          />

          <View style={{ margin: 20, marginBottom: 50, width: "100%" }}>
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20 }
              ]}
            >
              Select Size
            </Text>

            <View style={{ marginVertical: 10 }}>
              <View style={UtilStyles.formInputStandard}>
                <Picker
                  style={{
                    width: "100%",
                    alignItems: "center"
                  }}
                  textStyle={UtilStyles.standardText}
                  placeholder="Size"
                  placeholderStyle={{ color: "grey" }}
                  placeholderIconColor="black"
                  mode="dropdown"
                  iosIcon={
                    <Icon
                      name="ios-arrow-down"
                      size={20}
                      style={{ marginLeft: -100 }}
                    />
                  }
                  headerStyle={{ backgroundColor: Color.yellow_psm }}
                  headerBackButtonTextStyle={{ color: "black" }}
                  headerTitleStyle={{ color: "black" }}
                  selectedValue={this.state.selectedSize}
                  onValueChange={this.onValueChangeState.bind(this)}
                >
                  {this.state.lisOfSize.map((item, index) => {
                    return (
                      <Picker.Item key={index} label={item} value={item} />
                    );
                  })}
                </Picker>
              </View>
            </View>

            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginVertical: 10 }
              ]}
            >
              Select Quantity
            </Text>

            <View style={{ marginVertical: 10 }}>
              <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
                <Left
                  style={{
                    flex: 1,
                    flexDirection: "row"
                  }}
                >
                  <View style={{ flexDirection: "row", flex: 1 }}>
                    <Left style={{ flex: 1, alignItems: "center" }}>
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
                    <Body style={{ flex: 0.6, alignItems: "center" }}>
                      <Text style={UtilStyles.buttonTextBlack}>
                        {this.state.quantity}
                      </Text>
                    </Body>
                    <Right style={{ flex: 1, alignItems: "center" }}>
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
                </Left>
                <Right style={{ flex: 1 }} />
              </View>
            </View>
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
              onPress={() => this.setPopupSizeVisible()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Confirm</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
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
          <View style={{ flex: 0.3 }} />
        </View>
      </Overlay>
    );
  }

  renderData = () => {
    var temp = [
      {
        image: require("../../images/expImg/jersey1.jpg"),
        title: "Jersey Malaysia",
        price: "RM90.00",
        desc: "Black",
        quantity: 1
      },
      {
        image: require("../../images/expImg/jersey2.jpg"),
        title: "Jersey Malaysia",
        price: "RM90.00",
        desc: "Black, Yellow",
        quantity: 1
      },
      {
        image: require("../../images/expImg/jersey3.jpg"),
        title: "Jersey Malaysia",
        price: "RM90.00",
        desc: "White",
        quantity: 1
      }
    ];
    return (
      <View style={{ marginLeft: 10 }}>
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => this.onButtonPress(item)}>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View
                  style={{
                    backgroundColor: "white",
                    alignSelf: "flex-start",
                    padding: 10,
                    marginRight: 10
                  }}
                >
                  <Image
                    style={{
                      width: 100,
                      resizeMode: "stretch",
                      height: 120
                    }}
                    source={item.image}
                  />
                </View>

                <View
                  style={{
                    padding: 10,
                    justifyContent: "center",
                    flex: 1
                  }}
                >
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <Text style={UtilStyles.standardText}>{item.desc}</Text>
                  <Text
                    style={[
                      UtilStyles.standardText,
                      {
                        fontWeight: "bold",
                        marginTop: 20,
                        color: "grey"
                      }
                    ]}
                  >
                    {item.price}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20
                    }}
                  >
                    <Left style={{ flex: 1, alignItems: "center" }}>
                      <View style={UtilStyles.circleGreyOnButton}>
                        <Icon2
                          size={15}
                          style={{
                            color: Color.material_grey_600
                          }}
                          name="minus"
                        />
                      </View>
                    </Left>
                    <Body style={{ flex: 1, alignItems: "center" }}>
                      <Text style={UtilStyles.buttonTextBlack}>
                        {item.quantity}
                      </Text>
                    </Body>
                    <Right style={{ flex: 1, alignItems: "center" }}>
                      <View style={UtilStyles.circleGreyOnButton}>
                        <Icon2
                          size={15}
                          style={{
                            color: Color.material_grey_600
                          }}
                          name="plus"
                        />
                      </View>
                    </Right>
                    <View style={{ flex: 2 }} />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };

  renderAddOnListPopup() {
    return (
      <Overlay
        visible={this.state.modalAddOnListVisible}
        closeOnTouchOutside={false}
        onRequestClose={() => this.onToggleAddOnList()}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        childrenWrapperStyle={{ backgroundColor: "transparent" }}
        animationDuration={500}
        animationType="slideInUp"
      >
        <View
          style={{
            height: 400,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          <Icon
            name="md-close"
            size={25}
            color="black"
            style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 10 }}
            onPress={() => {
              this.onToggleAddOnList();
            }}
          />

          {/* <ScrollView
            automaticallyAdjustContentInsets={true}
            style={UtilStyles.container}
          >
            <List> */}
          <Content>
            {/* <List style={{ margin: 20, marginBottom: 50, width: "100%" }}> */}
            {this.renderData()}
            {/* </List> */}
          </Content>
          {/* </List>
          </ScrollView> */}
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
              onPress={() => this.onConfirmMerch()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Confirm</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
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
          <View style={{ flex: 0.3 }} />
        </View>
      </Overlay>
    );
  }

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <ModalHeader
          modal_title="Add-on Merchandise"
          toggleModal={this.props.toggleModal}
        />
        {this.renderPopupSize()}
        {/* {this.renderAddOnListPopup()} */}
        {this.renderAddOnListModal()}

        {this.renderButton()}

        <View
          style={{
            justifyContent: "center",
            margin: 20,
            alignItems: "center"
          }}
        >
          <Button
            style={UtilStyles.buttonFillWidthYellow}
            onPress={() => this.onToggleAddOnList()}
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextBlack}>
                View Selected Product (4)
              </Text>
            </Body>
            <Right style={{ marginRight: 10 }}>
              <View style={UtilStyles.circleWhiteOnButton}>
                <Icon
                  size={20}
                  style={{
                    color: "black"
                  }}
                  name="ios-eye"
                />
              </View>
            </Right>
          </Button>
        </View>
      </View>
    );
  }
}

export default MerchandiseModal;
