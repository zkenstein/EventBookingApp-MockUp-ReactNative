import React, { Component } from "react";
import {
  Container,
  Content,
  Left,
  Right,
  Text,
  Footer,
  Accordion,
  Card,
  Button,
  Body
} from "native-base";
import {
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";
import ModalHeader from "./ModalHeader";
import MealCartModal from "./MealCartModal";
var temp2 = [];
var temp = [
  {
    parent_id: 1,
    index: 0,
    image: require("../../images/expImg/meal1.jpg"),
    title: "Set 1",
    price: "RM24.00",
    selected: 0
  },
  {
    parent_id: 1,
    index: 1,
    image: require("../../images/expImg/meal2.jpg"),
    title: "Set 2",
    price: "RM24.00",
    selected: 0
  },
  {
    parent_id: 2,
    index: 2,
    image: require("../../images/expImg/meal3.jpg"),
    title: "Set 3",
    price: "RM24.00",
    selected: 0
  },
  {
    parent_id: 2,
    index: 3,
    image: require("../../images/expImg/meal4.jpg"),
    title: "Set 4",
    price: "RM24.00",
    selected: 0
  },
  {
    parent_id: 3,
    index: 4,
    image: require("../../images/expImg/meal5.jpg"),
    title: "Set 5",
    price: "RM24.00",
    selected: 0
  },
  {
    parent_id: 4,
    index: 5,
    image: require("../../images/expImg/meal6.jpg"),
    title: "Set 6",
    price: "RM24.00",
    selected: 0
  }
];

var dataArray = [
  {
    title: "Kitchen KLSC",
    content: temp,
    image: require("../../images/expImg/res1.jpg"),
    id: 1
  },
  {
    title: "KLSC Buffet",
    content: temp,
    image: require("../../images/expImg/res2.jpg"),
    id: 2
  },
  {
    title: "Subway",
    content: temp,
    image: require("../../images/expImg/res3.jpg"),
    id: 3
  },
  {
    title: "KLSC Bistro",
    content: temp,
    image: require("../../images/expImg/res4.jpg"),
    id: 4
  },
  {
    title: "Café KLSC",
    content: temp,
    image: require("../../images/expImg/res5.jpg"),
    id: 5
  },
  {
    title: "Coffee House KLSC",
    content: temp,
    image: require("../../images/expImg/res6.jpg"),
    id: 6
  }
];
var restoran = null;
var selected_item = [];
class MealModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: [],
      parentId: 0,
      mealModalVisible: false
    };
  }

  componentWillMount() {
    this.setState({
      temp: temp,
      refresh: !this.state.refresh
    });
  }
  onSelectedCourt = index => {
    var temp = this.state.temp;
    var parentId;
    // for (var i in temp) {
    //   temp[i]["selected"] = 0;
    // }
    for (var i in temp) {
      if (temp[i]["index"] == index) {
        temp[i]["selected"] = 1;
        parentId = temp[i]["parent_id"];
        selected_item.push(temp[i]);
      }
    }
    console.log(temp);
    this.setState({
      temp: temp,
      refresh: !this.state.refresh,
      parentId: parentId
    });
    // this.forceUpdate();
  };

  onConfirmMeal = () => {
    this.props.toggleModal();
  };

  onToggleMealCartModal = () => {
    console.log("Hello");
    var show = this.state.mealModalVisible;
    show = !show;
    this.setState({
      mealModalVisible: show
    });
    console.log(this.state.mealModalVisible);
  };

  renderMealCartModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated={true}
        visible={this.state.mealModalVisible}
        onRequestClose={() => {
          this.onToggleMealCartModal();
        }}
      >
        <MealCartModal
          restaurant={restoran}
          selected={selected_item}
          confirmAdd={this.onConfirmMeal}
          closeModal={this.onToggleMealCartModal}
        />
      </Modal>
    );
  };

  renderSelectedButton = item => {
    console.log("Hit", item);
    if (item.selected == 1) {
      return (
        <TouchableWithoutFeedback
          style={{ margin: 10 }}
          onPress={() => this.onSelectedCourt(item.index)}
        >
          <Card
            style={{
              margin: 10,
              height: 180,
              width: 140,
              justifyContent: "center",
              borderRadius: 10,
              borderWidth: 0,
              backgroundColor: Color.material_light_yellow_100
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
                  width: 90,
                  resizeMode: "stretch",
                  height: 100
                }}
                source={item.image}
              />
            </View>

            <View style={{ margin: 10 }}>
              <Text style={UtilStyles.standardText}>{item.title}</Text>
              <View style={{ flexDirection: "row" }}>
                <Left>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
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
      );
    } else {
      return (
        <TouchableWithoutFeedback
          style={{ margin: 10 }}
          onPress={() => this.onSelectedCourt(item.index)}
        >
          <Card
            style={{
              margin: 10,
              height: 180,
              width: 140,
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
                  width: 90,
                  resizeMode: "stretch",
                  height: 100
                }}
                source={item.image}
              />
            </View>

            <View style={{ margin: 10 }}>
              <Text style={UtilStyles.standardText}>{item.title}</Text>
              <View style={{ flexDirection: "row" }}>
                <Left>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
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
      );
    }
  };

  renderHeader = (item, expanded) => {
    return (
      //   <TouchableWithoutFeedback >
      <View
        style={{
          flexDirection: "row",
          padding: 15,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          shadowColor: "rgba(0, 0, 0, 0.2)",
          shadowOpacity: 0.5,
          elevation: 2,
          shadowRadius: 5,
          shadowOffset: { width: 1, height: 5 }
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{
              width: 30,
              resizeMode: "stretch",
              height: 30
            }}
            source={item.image}
          />
          <Text
            style={[
              UtilStyles.standardText,
              { fontWeight: "bold", marginLeft: 10 }
            ]}
          >
            {item.title}
          </Text>
        </View>

        {expanded ? (
          <Icon size={20} color="black" name="ios-arrow-up" />
        ) : (
          <Icon size={20} color="black" name="ios-arrow-down" />
        )}
      </View>
    );
  };

  renderContent = items => {
    console.log("THIS IS INDEX", items);
    restoran = items.title;
    var data = this.state.temp;
    var d = [];
    if (this.state.parentId != items.id) {
      console.log("HEY");
      selected_item = [];
      for (var i in data) {
        data[i]["selected"] = 0;
        if (data[i]["parent_id"] == items.id) {
          d.push(data[i]);
        }
      }
    } else {
      for (var i in data) {
        if (data[i]["parent_id"] == items.id) {
          d.push(data[i]);
        }
      }
    }
    return (
      <View
        style={{
          alignItems: "center",
          paddingVertical: 10,
          backgroundColor: Color.material_grey_100
        }}
      >
        <FlatList
          numColumns={2}
          data={d}
          extraData={this.state.refresh}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => this.renderSelectedButton(item)}
        />

        <Text
          style={[
            UtilStyles.standardText,
            { fontStyle: "italic", fontWeight: "bold", marginTop: 10 }
          ]}
        >
          3 meal selected
        </Text>

        <View
          style={{
            justifyContent: "center",
            margin: 20,
            alignItems: "center"
          }}
        >
          <Button
            style={UtilStyles.buttonFillWidthYellow}
            onPress={() => this.onToggleMealCartModal()}
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
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
      </View>
    );
  };

  render() {
    return (
      <Container>
        <ModalHeader
          modal_title="Add-on Meals"
          toggleModal={this.props.toggleModal}
        />
        {this.renderMealCartModal()}
        <Content style={{ width: "100%", padding: 10 }} padder>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
          />
        </Content>
      </Container>
    );
  }
}

export default MealModal;
