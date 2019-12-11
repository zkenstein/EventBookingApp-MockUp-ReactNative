import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { UtilStyles } from '../../style/styles';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AddOns extends Component {

    onButtonPress = () => {
        Actions.Payment();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    automaticallyAdjustContentInsets={true}
                    style={UtilStyles.container}
                >
                    <View style={UtilStyles.containerCenter}>
                        <Text> Add-Ons Page </Text>
                    </View>
                </ScrollView>
                <Button
                    style={UtilStyles.buttonFillWidthYellow}
                    onPress={() => this.onButtonPress()}
                >
                    <Text
                        style={UtilStyles.buttonTextBlack}
                    >
                        Proceed to Payment
            </Text>
                </Button>
            </View>
        )
    }
}
