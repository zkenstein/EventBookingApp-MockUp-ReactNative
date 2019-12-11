import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Modal,
  Image
} from "react-native";
import {
  Left,
  Right,
  ListItem,
  Button,
  Header,
  Body,
  Footer,
  Container,
  Content
} from "native-base";
import { UtilStyles } from "../../style/styles";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Color from "../../config/colors.json";
import { Actions } from "react-native-router-flux";
import MerchandiseDetailsHeader from "./MerchandiseDetailsHeader";
import ImageSlider from "react-native-image-slider";

export default class MerchandiseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCartVisible: false,
      product: true
    };
  }

  onButtonPress = () => {
    var show = this.state.product;
    show = !show;
    this.setState({
      product: show
    });
  };

  renderButton() {
    return (
      <View style={{ width: "100%", alignItems: "center", marginBottom: 10 }}>
        {this.state.product === true ? (
          <View style={{ flexDirection: "row" }}>
            <Button
              small
              style={[UtilStyles.btnYellow, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextBlack}>Product</Text>
            </Button>
            <Button
              small
              style={[UtilStyles.btnTransparent, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextGrey}>Details</Text>
            </Button>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Button
              small
              style={[UtilStyles.btnTransparent, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextGrey}>Product</Text>
            </Button>
            <Button
              small
              style={[UtilStyles.btnYellow, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextBlack}>Details</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }

  renderProduct() {
    return (
      <View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
            Select Quantity
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
            <Left
              style={{
                flex: 1
              }}
            >
              <Text style={UtilStyles.standardText}>Quantity</Text>
            </Left>
            <Right
              style={{
                flex: 1,
                flexDirection: "row-reverse"
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Left style={{ flex: 1, alignItems: "flex-end" }}>
                  <View style={UtilStyles.circleGreyOnButton}>
                    <Icon2
                      size={15}
                      style={{
                        color: Color.material_grey_600
                      }}
                      name="minus"
                    />
                  </View>
                </Left>
                <Body style={{ flex: 0.6, alignItems: "flex-end" }}>
                  <Text style={UtilStyles.buttonTextBlack}>2</Text>
                </Body>
                <Right style={{ flex: 1, alignItems: "flex-end" }}>
                  <View style={UtilStyles.circleGreyOnButton}>
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
          </View>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
            Select Size
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
            <Left
              style={{
                flex: 1
              }}
            >
              <Text style={UtilStyles.standardText}>Size</Text>
            </Left>
            <Right
              style={{
                flex: 1,
                flexDirection: "row-reverse"
              }}
            >
              <Button
                style={[UtilStyles.btnWhite, { flexDirection: "row" }]}
                // onPress={() => Actions.ArenaFacilitiesBooking()}
              >
                <Text style={UtilStyles.btnTextBlack}>XS</Text>
                <Icon
                  size={20}
                  style={{
                    color: "black",
                    marginLeft: 10
                  }}
                  name="ios-arrow-down"
                />
              </Button>
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
              <Text style={UtilStyles.standardText}>Size</Text>
            </Left>
            <Right
              style={{
                flex: 1,
                flexDirection: "row-reverse"
              }}
            >
              <Button
                style={[UtilStyles.btnWhite, { flexDirection: "row" }]}
                // onPress={() => Actions.ArenaFacilitiesBooking()}
              >
                <Text style={UtilStyles.btnTextBlack}>S</Text>
                <Icon
                  size={20}
                  style={{
                    color: "black",
                    marginLeft: 10
                  }}
                  name="ios-arrow-down"
                />
              </Button>
            </Right>
          </View>
        </View>
      </View>
    );
  }

  renderDetails() {
    return (
      <View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
            Category
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
            <Left
              style={{
                flex: 1,
                marginTop: 10
              }}
            >
              <Text style={UtilStyles.standardText}>Apparel > Jersey</Text>
            </Left>
          </View>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
            Brand
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
            <Left
              style={{
                flex: 1,
                marginTop: 10
              }}
            >
              <Text style={UtilStyles.standardText}>Nike</Text>
            </Left>
          </View>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
            Stock
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
            <Left
              style={{
                flex: 1,
                marginTop: 10
              }}
            >
              <Text style={UtilStyles.standardText}>150</Text>
            </Left>
          </View>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
            Description
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <View style={{ margin: 20, marginTop: 10, flexDirection: "row" }}>
            <Text style={UtilStyles.standardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pellentesque sem nec eros semper, a lacinia risus commodo. Sed in
              diam aliquam, bibendum ante et, congue lacus. Cras aliquam dictum
              ipsum, et gravida mi faucibus id. Morbi egestas erat a augue
              mollis faucibus. Nullam iaculis enim ac lobortis imperdiet. Sed
              nec ornare sem. Aenean eget est magna. Curabitur tortor elit,
              maximus sed dui malesuada, congue elementum eros.
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    var images = [
      {
        image: this.props.item.image,
        name: "Front"
      },
      {
        image: require("../../images/expImg/jersey5.jpg"),
        name: "Back"
      },
      {
        image: require("../../images/expImg/jersey6.jpg"),
        name: "Side"
      }
    ];
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <MerchandiseDetailsHeader
          title={this.props.item.title}
          price={this.props.item.price}
        />
        <View
          style={{
            backgroundColor: Color.yellow_psm,
            justifyContent: "center",
            alignItems: "center",
            height: 30
          }}
        />
        <ScrollView automaticallyAdjustContentInsets={true}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ImageSlider
              images={images}
              onPress={({ index }) => alert(index)}
              customSlide={({ index, item, style, width }) => (
                // It's important to put style here because it's got offset inside
                <View
                  key={index}
                  style={[
                    style,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: index % 2 === 0 ? "white" : "white"
                    }
                  ]}
                >
                  <Text
                    style={[UtilStyles.standardText, { marginVertical: 10 }]}
                  >
                    {item.name}
                  </Text>
                  <Image
                    source={item.image}
                    style={{
                      alignSelf: "center",
                      height: 250,
                      width: 150
                    }}
                    resizeMode="contain"
                  />
                </View>
              )}
              customButtons={(position, move) => (
                <View style={UtilStyles.buttons}>
                  {images.map((image, index) => {
                    return (
                      <TouchableHighlight
                        key={index}
                        underlayColor="#ccc"
                        onPress={() => move(index)}
                        style={UtilStyles.button}
                      >
                        <Icon2
                          name="circle"
                          size={10}
                          color={Color.material_grey_300}
                          style={
                            position === index && UtilStyles.buttonSelected
                          }
                        />
                      </TouchableHighlight>
                    );
                  })}
                </View>
              )}
            />
          </View>

          {this.renderButton()}

          {this.state.product === true ? (
            <View>{this.renderProduct()}</View>
          ) : (
            <View>{this.renderDetails()}</View>
          )}
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
                <View style={UtilStyles.circleBlackOnButton}>
                  <Icon
                    size={20}
                    style={{
                      color: "white"
                    }}
                    name="md-share-alt"
                  />
                </View>
              </Right>
            </Button>
          </View>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => Actions.CartMerchFNB({ item: "merch" })}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Add To Cart</Text>
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
      </View>
    );
  }
}
