import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Thumbnail,
  Footer,
  List,
  ListItem,
  Icon as Ico
} from "native-base";
import {
  StatusBar,
  AsyncStorage,
  View,
  WebView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

import ModalHeader from "./ModalHeader";
var { height, width } = Dimensions.get("window");

class MealCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_list: []
    };
  }
  componentWillMount() {
    console.log("MEAL PROPS", this.props.selected);
    if (this.props.selected);
    var d = this.props.selected;
    for (var i in d) {
      d[i]["quantity"] = 1;
    }
    this.setState({
      selected_list: d
      // refresh: !this.state.refresh
    });
  }

  renderSelectedList = ({ item }) => {
    console.log(item);
    return (
      // <ListItem>
      //   <Left>
      //     <View style={{ flexDirection: "row", flex: 1 }}>
      //       <Left style={{ flex: 1, alignItems: "center" }}>
      //         <TouchableOpacity
      //           style={UtilStyles.circleGreyOnButton}
      //           onPress={this.onButtonMinus}
      //         >
      //           <Icon2
      //             size={15}
      //             style={{
      //               color: Color.material_grey_600
      //             }}
      //             name="minus"
      //           />
      //         </TouchableOpacity>
      //       </Left>
      //       <Body style={{ flex: 0.6, alignItems: "center" }}>
      //         <Text
      //           style={[
      //             UtilStyles.buttonTextBlack,
      //             { fontSize: 15, marginTop: 5, marginRight: 6 }
      //           ]}
      //         >
      //           {item.quantity}
      //         </Text>
      //       </Body>
      //       <Right style={{ flex: 1, alignItems: "center" }}>
      //         <TouchableOpacity
      //           style={UtilStyles.circleGreyOnButton}
      //           onPress={this.onButtonPlus}
      //         >
      //           <Icon2
      //             size={15}
      //             style={{
      //               color: Color.material_grey_600
      //             }}
      //             name="plus"
      //           />
      //         </TouchableOpacity>
      //       </Right>
      //     </View>
      //   </Left>
      //   <Body style={{ flexDirection: "row", flex: 2 }}>
      //     <Text style={[UtilStyles.btnTextBlack, { fontWeight: "bold" }]}>
      //       {item.title}
      //     </Text>
      //   </Body>
      //   <Right style={{ flexDirection: "row", flex: 1 }}>
      //     <Text style={[UtilStyles.btnTextBlack, { fontWeight: "bold" }]}>
      //       {item.price}
      //     </Text>
      //   </Right>
      // </ListItem>

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
              <View
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
              </View>
            </Left>
            <Body style={{ flex: 1, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextBlack}>{item.quantity}</Text>
            </Body>
            <Right style={{ flex: 1, alignItems: "center" }}>
              <View
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
              </View>
            </Right>
          </View>
        </Right>
      </ListItem>
    );
  };

  render() {
    return (
      <Container>
        <ModalHeader
          modal_title={this.props.restaurant}
          toggleModal={this.props.closeModal}
        />
        <Content style={{ marginLeft: 10 }}>
          <FlatList
            data={this.state.selected_list}
            extraData={this.state.refresh}
            keyExtractor={(object, index) => index}
            renderItem={this.renderSelectedList}
          />
        </Content>

        {/* <Footer style={{ backgroundColor: 'white', borderTopWidth: 0 }}> */}
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
              <Text style={UtilStyles.buttonTextBlack}>
                Add Meals({this.state.selected_list.length})
              </Text>
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

        {/* </Footer> */}
      </Container>
    );
  }
}

const stylo = {
  listItemOveride: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 0
  }
};

export default MealCartModal;
