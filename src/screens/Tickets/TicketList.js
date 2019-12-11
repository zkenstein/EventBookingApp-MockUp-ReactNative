import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  FlatList
} from "react-native";
import { UtilStyles } from "../../style/styles";
import { Button, Card, CardItem, Text, List } from "native-base";
import { Actions } from "react-native-router-flux";
import TicketListHeader from "./TicketListHeader";
import SearchBar from "../SearchBar";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "../../config/colors.json";

export default class TicketList extends Component {
  onButtonPress = () => {
    Actions.TicketDetails();
  };

  renderlist = () => {
    var temp = [
      {
        poster: require("../../images/jasonposter.jpg"),
        image: require("../../images/jason.jpg"),
        title: "Jason Mraz In Kuala Lumpur",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/edposter.jpg"),
        image: require("../../images/edposter.jpg"),
        title: "Ed Sheeran Divide World Tour",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/ct2.jpg"),
        image: require("../../images/ct.jpg"),
        title: "Dato' Sri Siti Nurhaliza",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/lanyposter.jpg"),
        image: require("../../images/lany.jpg"),
        title: "Lany Malibu Nights World Tour",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      }
    ];
    return (
      <View>
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                marginBottom: 10,
                backgroundColor: "white"
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => Actions.TicketDetails({ item: item })}
              >
                <View>
                  <View style={{ margin: 0 }}>
                    <Image
                      style={{
                        width: "100%",
                        height: 200
                      }}
                      source={item.image}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginHorizontal: 20,
                      marginVertical: 10
                    }}
                  >
                    <Text style={UtilStyles.standardText}>{item.title}</Text>
                    <Text
                      style={[UtilStyles.standardText, { color: "grey" }]}
                      note
                    >
                      {item.venue}
                    </Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: "black",
                      width: "90%",
                      height: 0.5,
                      marginHorizontal: 10
                    }}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      marginHorizontal: 20,
                      marginVertical: 10
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginRight: 20,
                        alignItems: "center"
                      }}
                    >
                      <Icon style={UtilStyles.inputIcon} name="heart" />
                      <Text
                        style={[UtilStyles.standardText, { marginLeft: 10 }]}
                      >
                        Track
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Icon style={UtilStyles.inputIcon} name="share-alt" />
                      <Text
                        style={[UtilStyles.standardText, { marginLeft: 10 }]}
                      >
                        Share
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "white",
                      position: "absolute",
                      // alignSelf: "flex-end",
                      padding: 2,
                      borderRadius: 3,
                      marginLeft: "87%",
                      marginRight: 10,
                      marginTop: 10
                    }}
                  >
                    <Text style={UtilStyles.standardText}>MON</Text>
                    <Text
                      style={[
                        UtilStyles.titleText,
                        { fontWeight: "bold", fontSize: 20 }
                      ]}
                    >
                      13
                    </Text>
                    <Text style={UtilStyles.standardText}>MAY</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        />
      </View>
    );
    //<ViewShop ticket={temp} />;
  };

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <TicketListHeader header_text="Event List" rkCardImgOverlay />
        {/* <SearchBar /> */}
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[
            UtilStyles.container,
            { backgroundColor: Color.material_grey_100 }
          ]}
        >
          <List>{this.renderlist()}</List>
        </ScrollView>
      </View>
    );
  }
}
