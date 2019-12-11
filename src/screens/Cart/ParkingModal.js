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
import { StatusBar, AsyncStorage, View, WebView, Dimensions, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

import ModalHeader from "./ModalHeader";
var { height, width } = Dimensions.get("window");


class ParkingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkings: []
        }
    }
    componentWillMount() {
        var parkings = [{
            id: 0,
            parking_area: "Parking Gate A",
            quota: 500,
            selected: 0,
        },
        {
            id: 1,
            parking_area: "Parking Gate B",
            quota: 500,
            selected: 0,
        },
        {
            id: 2,
            parking_area: "Parking Gate B",
            quota: 500,
            selected: 0,
        }];

        this.setState({
            parkings: parkings
        })
    }

    selectParking = (id) => {
        var parkings = this.state.parkings;
        for (var i in parkings) {
            parkings[i]["selected"] = 0;
        }

        for (var i in parkings) {
            if (parkings[i]["id"] == id) {
                parkings[i]["selected"] = 1;
            }
        }

        this.setState({
            parkings: parkings,
            refresh: !this.state.refresh
        });

    }
    renderAddOnParkings = ({ item }) => {
        if (item.selected == 1) {
            return (
                <ListItem style={[stylo.listItemOveride, { backgroundColor: Color.yellow_psm }]}>
                    <Left>
                        <Text style={[UtilStyles.btnTextBlack, { fontWeight: 'bold' }]}>{item.parking_area}</Text>
                    </Left>
                    <Right>
                        <Text style={[UtilStyles.btnTextBlack, { fontWeight: 'bold' }]}>{item.quota} Available</Text>
                    </Right>
                </ListItem>
            );
        } else {
            return (
                <ListItem style={[stylo.listItemOveride, { backgroundColor: 'white' }]} onPress={() => this.selectParking(item.id)} >
                    <Left>
                        <Text style={UtilStyles.btnTextBlack}>{item.parking_area}</Text>
                    </Left>
                    <Right>
                        <Text style={UtilStyles.btnTextBlack}>{item.quota} Available</Text>
                    </Right>
                </ListItem>
            );
        }
    }
    render() {
        return (
            <Container
                style={{
                    alignItems: "center"
                }}
            >
                <ModalHeader modal_title="Add-on Parking" toggleModal={this.props.toggleModal} />
                <Content>
                    <WebView
                        source={{
                            uri: "https://demo.stubapp.com/svg-example/parking.html"
                        }}
                        automaticallyAdjustContentInsets={true}
                        style={{ width: width, height: 300 }}
                        scalesPageToFit={true}
                        onMessage={m => this.onMessage(m)}
                    />
                    <FlatList
                        data={this.state.parkings}
                        extraData={this.state.refresh}
                        keyExtractor={(object, index) => index}
                        renderItem={this.renderAddOnParkings}
                    />
                </Content>

                {/* <Footer style={{ backgroundColor: 'white', borderTopWidth: 0 }}> */}
                    <View
                        style={{
                            justifyContent: "center",
                            margin: 20,
                            alignItems: "center"
                        }}>
                        <Button
                            style={UtilStyles.buttonFillWidthYellow}
                            onPress={() => this.props.toggleModal()}>
                            <Left style={{ flex: 1 }} />
                            <Body style={{ flex: 3, alignItems: "center" }}>
                                <Text style={UtilStyles.buttonTextBlack}>Add Parking</Text>
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

                {/* </Footer> */}
            </Container>
        );
    }
}

const stylo = {
    listItemOveride: {
        width: '100%', marginLeft: 0, paddingLeft: 10, paddingRight: 10, marginRight: 0
    }
}

export default ParkingModal;
