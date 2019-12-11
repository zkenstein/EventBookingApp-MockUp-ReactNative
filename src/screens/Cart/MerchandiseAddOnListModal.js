import React, { Component } from "react";
import { Left, Right, Text, Body, List, ListItem, Button } from "native-base";
import {
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
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

export default class MerchandiseAddOnListModal extends Component {
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
            <ListItem
              style={{
                backgroundColor: "transparent",
                marginLeft: 0,
                marginBottom: 10
              }}
            >
              <Left style={{ flex: 1 }}>
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
                      width: 60,
                      resizeMode: "stretch",
                      height: 80
                    }}
                    source={item.image}
                  />
                </View>
              </Left>
              <Body style={{ flex: 2 }}>
                <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                  {item.title}
                </Text>
                <Text style={UtilStyles.standardText}>Black</Text>
                <Text
                  style={[
                    UtilStyles.titleText,
                    { fontWeight: "bold", color: "grey" }
                  ]}
                >
                  {item.price}
                </Text>
               
              </Body>
              <Right style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
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
                </View>
              </Right>
            </ListItem>
          )}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <ModalHeader
          modal_title="Add-on List Merchandise"
          toggleModal={this.props.toggleCart}
        />
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={UtilStyles.container}
        >
          <List>{this.renderData()}</List>
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
            onPress={() => this.props.confirmAdd()}
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextBlack}>Add Merchandise</Text>
            </Body>
            <Right style={{ marginRight: 10 }}>
              <View style={UtilStyles.circleWhiteOnButton}>
                <Icon
                  size={20}
                  style={{
                    color: "black"
                  }}
                  name="ios-add"
                />
              </View>
            </Right>
          </Button>
        </View>
      </View>
    );
  }
}
