import React, { Component } from "react";
import { Text, View, ScrollView, Image, StatusBar } from "react-native";
import { UtilStyles } from "../../style/styles";
import { Button, Left, Right, Body } from "native-base";
import { Actions } from "react-native-router-flux";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import WebHtmlView from "react-native-webhtmlview";
import axios from "axios";
import Video from "react-native-video";

import FloatingBackButton from "../../components/FloatingBackButton";

export default class TicketDetails extends Component {
  constructor() {
    super();
    this.state = {
      vid: ""
    };
  }

  onButtonPress = () => {
    Actions.TicketSectionSelection({ item: this.props.item });
  };

  componentDidMount() {
    console.log("item", this.props.item);
    this.onSubmitPress();
  }

  onSubmitPress() {
    axios
      .get("https://stubapp.com/api/" + "how-to-buy/vid")
      .then(response => {
        console.log("tnc response", response.data);
        this.setState({ vid: response.data.video_url });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View
        style={[
          UtilStyles.containerJustifyCenter,
          { backgroundColor: Color.material_grey_100 }
        ]}
      >
        <StatusBar backgroundColor={"transparent"} translucent />
        <ScrollView automaticallyAdjustContentInsets={true}>
          <View style={{ margin: 0 }}>
            <Image
              style={{
                width: "100%",
                height: 200
              }}
              source={this.props.item.image}
            />
            <FloatingBackButton />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 20,
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: Color.material_grey_50
              }}
            >
              <Text style={[UtilStyles.standardText, { color: "grey" }]} note>
                MON
              </Text>
              <Text style={UtilStyles.standardText}>13</Text>
              <Text style={[UtilStyles.standardText, { color: "grey" }]} note>
                MAY
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "white"
              }}
            >
              <Text style={UtilStyles.standardText}>
                {this.props.item.title}
              </Text>
              <Text style={[UtilStyles.standardText, { color: "grey" }]} note>
                {this.props.item.venue}
              </Text>
            </View>
          </View>

          <View style={{ margin: 20 }}>
            <Text style={UtilStyles.standardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pellentesque sem nec eros semper, a lacinia risus commodo. Sed in
              diam aliquam, bibendum ante et, congue lacus. Cras aliquam dictum
              ipsum, et gravida mi faucibus id. Morbi egestas erat a augue
              mollis faucibus. Nullam iaculis enim ac lobortis imperdiet. Sed
              nec ornare sem. Aenean eget est magna. Curabitur tortor elit,
              maximus sed dui malesuada, congue elementum eros. Fusce aliquet
              libero sed metus molestie congue. Ut ligula turpis, luctus a
              imperdiet vitae, elementum posuere nunc. Mauris posuere tristique
              sagittis. Nullam nisl mauris, tristique vitae orci vitae, semper
              ornare odio. Mauris porttitor nulla mauris, eu efficitur ante
              facilisis ut. Suspendisse mollis nec lectus ut ornare. Nulla id
              metus risus. Phasellus finibus justo justo, a molestie metus
              scelerisque nec. Quisque aliquam hendrerit quam, in mollis diam
              fringilla sed. Donec enim velit, malesuada quis tellus at,
              efficitur iaculis felis. Curabitur in tortor eu mauris dapibus
              mollis in vitae urna.
            </Text>
          </View>

          {/* <View style={{ alignItems: "center" }}>
            <Video
              source={require("../../images/vid.mp4")} // Can be a URL or a local file.
              ref={ref => {
                this.player = ref;
              }} // Store reference
              onBuffer={this.onBuffer} // Callback when remote video is buffering
              onError={this.videoError} // Callback when video cannot be loaded
              style={{
                width: 250,
                height: 200
              }}
            />
          </View> */}
        </ScrollView>
        <View
          style={{
            justifyContent: "center",
            margin: 10,
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1, paddingRight: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthWhite}
              // onPress={() => this.onButtonPress()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Share</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
                <View style={UtilStyles.circleGreyOnButton2}>
                  <Icon
                    size={20}
                    style={{
                      color: "white"
                    }}
                    name="md-share"
                    onPress={() => this.onButtonPress()}
                  />
                </View>
              </Right>
            </Button>
          </View>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => this.onButtonPress()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Buy Now</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
                <View style={UtilStyles.circleWhiteOnButton}>
                  <Icon
                    size={20}
                    style={{
                      color: "black"
                    }}
                    name="ios-arrow-forward"
                    onPress={() => this.onButtonPress()}
                  />
                </View>
              </Right>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
