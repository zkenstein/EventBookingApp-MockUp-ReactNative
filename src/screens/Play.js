import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ListView,
  ScrollView
} from "react-native";
import SocketIOClient from "socket.io-client";
// import { environment } from '../config/environment';

export default class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAll: [],
      user: ""
    };

    // this.socket = SocketIOClient("http://localhost:4200/");
    // var socket = SocketIOClient("http://13.250.118.140:4200/");

    // // console.log("sent to server");
    // socket.on("users connected", data => {
    //   // console.log("hey")
    //   this.setState({ user: data });
    // });

    // this.socket.on('users connected', (data) => {
    //   console.log('Data recieved from server', data); //this will console 'channel 2'
    // })

    // socket.on("talktodb", data => {
    //   console.log("data received : ", data);
    //   var temp = [];
    //   for (var i = 0; i < data.length; i++) {
    //     temp.push(data[i].note);
    //   }

    //   console.log("temp: ", temp);
    //   this.setState({ dataAll: temp });
    //   //sssssss socket.emit('myreactnative', { my: 'datarec' });
    //   socket.emit("my other event", { my: "datareactnative" });
    // });
  }

  render() {
    // console.log("temp: ", this.state.dataAll);
    return (
      <View style={{ alignItems: "center", marginVertical: 30 }}>
        <Text>User Connected : {this.state.user}</Text>

        <ScrollView style={{ width: "100%", marginLeft: 50, marginTop: 30 }}>
          {this.state.dataAll
            .map(x => {
              return (
                <View>
                  <Text>{x}</Text>
                </View>
              );
            })
            .reverse()}
        </ScrollView>
      </View>
    );
  }
}
