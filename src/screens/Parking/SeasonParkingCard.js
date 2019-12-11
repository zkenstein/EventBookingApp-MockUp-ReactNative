import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import QRCodeHeader from "../MyPurchases/QRCodeHeader";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import { Left, Right, Content } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";

export default class SeasonParkingCard extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: Color.yellow_psm,
          alignItems: "center"
        }}
      >
        <View
          style={[UtilStyles.cardParking, { marginTop: 50, marginBottom: 20 }]}
        >
          <View
            style={{
              width: "100%",
              height: 110,
              flexDirection: "row",
              padding: 5,
              alignItems: "flex-start"
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  width: 70,
                  height: 90
                }}
                source={require("../../images/klscLogo.png")}
              />
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text
                style={[
                  UtilStyles.titleText,
                  {
                    fontWeight: "bold",
                    color: Color.yellow_psm
                  }
                ]}
              >
                Season Parking
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 5
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 250,
                backgroundColor: "white"
              }}
              source={require("../../images/qr.png")}
            />
          </View>

          <View
            style={{
              width: "100%",
              height: 50,
              padding: 5
            }}
          >
            <Text
              style={[
                UtilStyles.standardText,
                {
                  color: "white",
                  fontSize: 15
                }
              ]}
            >
              Marina Robertson
            </Text>

            <Text
              style={[
                UtilStyles.standardText,
                {
                  color: "white",
                  fontSize: 15
                }
              ]}
            >
              00000001
            </Text>
          </View>
        </View>

        <Text
          style={[
            UtilStyles.standardText,
            { fontStyle: "italic", marginBottom: 20 }
          ]}
        >
          Please scan this QR Code to the scanner machine
        </Text>

        <TouchableWithoutFeedback onPress={() => Actions.pop()}>
          <View style={UtilStyles.circleBigBlackOnButton}>
            <Icon
              size={25}
              style={{
                color: Color.yellow_psm
              }}
              name="md-close"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
