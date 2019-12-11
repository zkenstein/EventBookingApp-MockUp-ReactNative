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
    Footer
} from "native-base";
import { StatusBar, AsyncStorage, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

class ModalHeader extends Component {
    render() {
        return (

            <Header
                style={{
                    backgroundColor: Color.yellow_psm,
                    width: "100%",
                    borderBottomWidth: 0,
                    elevation: 0
                }}
            >
                <Left style={{ flex: 1 }} />
                <Body
                    style={{
                        flex: 2,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
                        {this.props.modal_title}
                    </Text>
                </Body>
                <Right style={{ flex: 1 }}>
                    <Icon
                        size={25}
                        style={{
                            color: "black",
                            marginRight: 10
                        }}
                        name="md-close"
                        onPress={() => this.props.toggleModal()}
                    />
                </Right>
            </Header>

        );
    }
}

export default ModalHeader;
