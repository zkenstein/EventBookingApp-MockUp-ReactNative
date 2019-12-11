import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Thumbnail
} from "native-base";
import { StatusBar, AsyncStorage, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

class EditProfileHeader extends Component {
  render() {
    const uri =
      "https://vignette.wikia.nocookie.net/blindspot/images/c/cc/Janeportrait1.png/revision/latest?cb=20170328005601";
    return (
      <Header
        style={[UtilStyles.headerSmall, { borderBottomWidth: 0, elevation: 0 }]}
      >
        <StatusBar backgroundColor={Color.yellow_psm} barStyle="dark-content" />

        <Container
          style={{
            flexDirection: "row",
            backgroundColor: "transparent",
            marginLeft: 20
          }}
        >
          <Left style={{ flex: 1 }}>
            <Thumbnail source={{ uri: uri }} />
          </Left>
          <Body style={{ flex: 2 }}>
            <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
              Edit Profile
            </Text>
          </Body>
          <Right style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon2
              size={25}
              style={{
                color: "black",
                marginRight: 10
              }}
              name="md-close"
              onPress={() => Actions.pop()}
            />
          </Right>
        </Container>
      </Header>
    );
  }
}

export default EditProfileHeader;
