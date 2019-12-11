import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";
import Color from "../config/colors.json";
import Icon from "react-native-vector-icons/FontAwesome";
import { UtilStyles } from "../style/styles";

export default class SearchBar extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Color.yellow_psm
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 10
          }}
        >
          <Button
            style={{
              backgroundColor: "black",
              borderRadius: 30,
              elevation: 0,
              width: "100%",
              height: 50,
              alignItems: "center"
            }}
            // onPress={() => this.onButtonPress(this.props.listItem)}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                flexDirection: "row",
                marginLeft: 20
              }}
            >
              <Icon
                style={[UtilStyles.inputIcon, { color: "white" }]}
                name="search"
              />
              <Text
                rkType="small"
                style={{
                  fontSize: 11,
                  fontWeight: "100",
                  flex: 1,
                  marginLeft: 15,
                  color: "white"
                }}
              >
                Search Something
              </Text>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}
