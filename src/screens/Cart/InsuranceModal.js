import React, { Component } from "react";
import {
  Container,
  Content,
  Left,
  Right,
  Text,
  Footer,
  Card,
  Button,
  Body,
  List,
  ListItem
} from "native-base";
import { View, Image, FlatList, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";
import ModalHeader from "./ModalHeader";

class InsuranceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <Container style={{ alignItems: "center" }}>
        <ModalHeader
          modal_title="Add-on Insurance"
          toggleModal={this.props.toggleModal}
        />
        <Content style={{ width: "100%", padding: 10 }} padder>
          <ListItem noBorder>
            <Body>
              <Text style={UtilStyles.btnTextBlack}>
                With the range of ticket insurance available from KLSC , you're
                sure to find booking protection that's right for you. Whether
                you want cover for Just The Ticket, or you want to make sure
                your travel and accommodation are covered as well, you can
                tailor your policy to meet your needs :-
              </Text>
            </Body>
          </ListItem>
          <ListItem noBorder icon>
            <Left>
              <Icon style={{ fontSize: 25 }} name="ios-checkmark" />
            </Left>
            <Body>
              <Text style={UtilStyles.btnTextBlack}>Single Event Cover </Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem noBorder icon>
            <Left>
              <Icon style={{ fontSize: 25 }} name="ios-checkmark" />
            </Left>
            <Body>
              <Text style={UtilStyles.btnTextBlack}>
                Ticket price up to RM 2000 per ticket or group of tickets{" "}
              </Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem noBorder icon>
            <Left>
              <Icon style={{ fontSize: 25 }} name="ios-checkmark" />
            </Left>
            <Body>
              <Text style={UtilStyles.btnTextBlack}>
                Refund of ticket price{" "}
              </Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem noBorder icon>
            <Left>
              <Icon style={{ fontSize: 25 }} name="ios-checkmark" />
            </Left>
            <Body>
              <Text style={UtilStyles.btnTextBlack}>
                Refund of booking fees{" "}
              </Text>
            </Body>
            <Right />
          </ListItem>
          <View
            style={{ borderTopWidth: 1, borderColor: "grey", width: "100%" }}
          >
            <ListItem noBorder>
              <Body>
                <Text style={UtilStyles.btnTextBlack}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </Text>
              </Body>
            </ListItem>
            <ListItem noBorder>
              <Body>
                <Text style={UtilStyles.btnTextBlack}>
                  Premium displayed is inclusive of 6% SST.
                </Text>
              </Body>
            </ListItem>
            <ListItem noBorder>
              <Body>
                <Text style={UtilStyles.btnTextBlack}>
                  Note : The ticket insurance is following the ISIM terms and
                  conditon.
                </Text>
              </Body>
            </ListItem>
          </View>
        </Content>

        <View
          style={{
            justifyContent: "center",
            margin: 20,
            alignItems: "center"
          }}
        >
          <Button
            style={UtilStyles.buttonFillWidthYellow}
            onPress={() => this.props.toggleModal()}
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextBlack}>Add Insurance</Text>
            </Body>
            <Right style={{marginRight:10}}>
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
      </Container>
    );
  }
}

export default InsuranceModal;
