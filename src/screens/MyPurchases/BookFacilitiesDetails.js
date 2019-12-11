import React, { Component } from "react";
import { Text, View, ScrollView, Image, FlatList } from "react-native";
import { Button, Left, Right, List } from "native-base";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import QRCodeHeader from "./QRCodeHeader";
import Icon from "react-native-vector-icons/FontAwesome";

export default class BookFacilitiesDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <QRCodeHeader title="" />

        <View
          style={{
            width: "100%",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: "100%",
              height: 100,
              alignItems: "flex-start",
              backgroundColor: Color.yellow_psm,
              position: "absolute"
              // alignSelf: "flex-start"
            }}
          />

          <View style={UtilStyles.cardMyPurchaseDetails}>
            <View
              style={{
                alignItems: "center",
                marginBottom: 10
              }}
            >
              <Image
                style={{
                  width: "80%",
                  height: 180
                }}
                source={require("../../images/qr.png")}
              />
            </View>

            <View
              style={{
                alignItems: "center"
              }}
            >
              <Text style={UtilStyles.standardText}>
                {this.props.item.type}
              </Text>
            </View>

            <View style={{ width: "100%" }}>
              <View
                style={{
                  backgroundColor: Color.yellow_psm,
                  borderRadius: 10,
                  elevation: 0,
                  width: "100%",
                  justifyContent: "center",
                  padding: 10,
                  marginVertical: 10,
                  alignItems: "center"
                }}
              >
                <Text
                  style={[
                    UtilStyles.standardText,
                    {
                      fontWeight: "bold"
                    }
                  ]}
                >
                  {this.props.item.title}
                </Text>
                <Text style={UtilStyles.standardText}>
                  {this.props.item.desc}
                </Text>
              </View>
            </View>

            <View style={[UtilStyles.hr, { alignSelf: "center" }]} />

            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                Details
              </Text>
            </View>
            <View style={{ width: "100%", marginBottom: 10 }}>
              <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
                <Left
                  style={{
                    flex: 1
                  }}
                >
                  <Text style={UtilStyles.standardText}>Price</Text>
                </Left>
                <Right
                  style={{
                    flex: 1,
                    flexDirection: "row-reverse"
                  }}
                >
                  <Text style={UtilStyles.standardText}>
                    {this.props.item.price}
                  </Text>
                </Right>
              </View>
            </View>

            <View style={{ width: "100%", marginBottom: 10 }}>
              <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
                <Left
                  style={{
                    flex: 1
                  }}
                >
                  <Text style={UtilStyles.standardText}>Date</Text>
                </Left>
                <Right
                  style={{
                    flex: 1,
                    flexDirection: "row-reverse"
                  }}
                >
                  <Text style={UtilStyles.standardText}>1 Sep 2019</Text>
                </Right>
              </View>
            </View>

            <View style={{ width: "100%", marginBottom: 10 }}>
              <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
                <Left
                  style={{
                    flex: 1
                  }}
                >
                  <Text style={UtilStyles.standardText}>Session</Text>
                </Left>
                <Right
                  style={{
                    flex: 1,
                    flexDirection: "row-reverse"
                  }}
                >
                  <Text style={UtilStyles.standardText}>9:00pm - 10:00pm</Text>
                </Right>
              </View>
            </View>
            {this.props.item.rentType !== false ? (
              <View style={{ width: "100%", marginBottom: 10 }}>
                <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
                  <Left
                    style={{
                      flex: 1
                    }}
                  >
                    <Text style={UtilStyles.standardText}>Area</Text>
                  </Left>
                  <Right
                    style={{
                      flex: 1,
                      flexDirection: "row-reverse"
                    }}
                  >
                    <Text style={UtilStyles.standardText}>
                      {this.props.item.rentType} 1
                    </Text>
                  </Right>
                </View>
              </View>
            ) : (
              <View />
            )}

            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 30,
                marginBottom: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 20,
                  alignItems: "center"
                }}
              >
                <Icon
                  size={20}
                  style={{
                    color: "black"
                  }}
                  name="bell-o"
                />
                <Text style={[UtilStyles.standardText, { marginLeft: 10 }]}>
                  Alert
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  size={20}
                  style={{
                    color: "black"
                  }}
                  name="share-alt"
                />
                <Text style={[UtilStyles.standardText, { marginLeft: 10 }]}>
                  Share
                </Text>
              </View>
            </View>
          </View>

          {/* <ScrollView
            style={{
              flexDirection: "row",
              padding: 30,
              paddingTop: 0
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <List>{this.renderlistQR()}</List>
          </ScrollView> */}
        </View>
      </View>
    );
  }
}
