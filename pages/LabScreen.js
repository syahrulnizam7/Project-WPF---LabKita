import React, { Component, useState } from 'react';
import { View, StyleSheet, TextInput,Text,Image,Pressable } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { TextInputMask } from 'react-native-masked-text';
import moment from 'moment';
import Constants from 'expo-constants';
import RadioGroup from 'react-native-custom-radio-group';
import {radioGroupList} from './radioGroupList'

export default class LabScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, dt: null, registrationDate: '' };
  }
  checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  }
  dateTimeInputChangeHandler = (e) => {
    this.type = 'text';
    var input = e;
    var expr = new RegExp(/\D\/$/);
    if (expr.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[1]) values[1] = this.checkValue(values[1], 12);
    if (values[0]) values[0] = this.checkValue(values[0], 31);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + '/' : v;
    });
    this.setState({
      registrationDate: output.join('').substr(0, 14),
    });
  };

  radioGroupList = [{
  label: 'Car',
  value: 'transport_car'
}, {
  label: 'Bike',
  value: 'transport_bike'
}, {
  label: 'Bus',
  value: 'transport_bus'
}];

  changeStyle(value) {
        if(value == "transport_car") {
            this.setState({
                  activeBgColor: '#61B0B7',
                  activeTxtColor: "white",
                  inActiveBgColor: "white",
                  inActiveTxtColor: "black",
            });
        } else if(value == "transport_bike") {
            this.setState({
                  activeBgColor: '#61B0B7',
                  activeTxtColor: "white",
                  inActiveBgColor: "white",
                  inActiveTxtColor: "black",
            });
        } else if(value == "transport_bus") {
             this.setState({
                   activeBgColor: '#61B0B7',
                   activeTxtColor: "white",
                   inActiveBgColor: "white",
                   inActiveTxtColor: "black",
             });
        }
  }

  render() {
    return (
      <View style={{ backgroundColor: '#F2F2F2', width: '100%', height: '100%' }}>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Image style={{ height: 79, width: 148, marginLeft: -10 }} source={require('../assets/logo.png')} />
        <Image style={{ height: 50, width: 50, marginTop: 10, marginLeft: 170 }} source={require('../assets/Account.png')} />
      </View>
      <View style={styles.main}>
        <Image style={styles.img} source={require('../assets/labbio.jpg')} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 10 }}>LABORATORIUM BIOLOGI</Text>
        <Text style={{fontSize:20,alignSelf:'center',marginTop:10}}>Pilih Tanggal Peminjaman</Text>
        <TextInput
          keyboardType="number-pad"
          style={{
            textAlign: 'center',
            alignSelf:'center',
            width: 150,
            marginTop:10,
            backgroundColor: 'white',
            padding: 10,
            height:40,
            borderWidth: 1,
            borderColor: 'black',
            paddingHorizontal: 30,
          }}
          maxLength={10}
          placeholder="DD/MM/YYYY"
          onChangeText={(e) => this.dateTimeInputChangeHandler(e)}
          value={this.state.registrationDate}
        />
        <Text style={{fontSize:20,alignSelf:'center',marginTop:25, marginBottom:10}}>Pilih Waktu Peminjaman</Text>
        <RadioGroup
                radioGroupList={radioGroupList}
                buttonContainerActiveStyle = {{backgroundColor: this.state.activeBgColor}}
                buttonTextActiveStyle = {{color: this.state.activeTxtColor}}
                buttonContainerInactiveStyle = {{backgroundColor: this.state.inActiveBgColor}}
                buttonTextInactiveStyle = {{color: this.state.inActiveTxtColor}}
                onChange={(value) => {this.changeStyle(value);}}
          />
          <Pressable style={styles.button}>
        <Text style={styles.text}>Submit</Text>
        </Pressable>
          <View>
    </View>
      </View>
      </View>
        
    );
  }
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 10,
    height:'100%',
  },
  img: {
    height: 250,
    width: 320,
    borderRadius: 50,
    margin: 'auto',
    marginTop: 20,
    alignSelf:'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#61B0B7',
    width:150,
    borderRadius: 50,
    alignSelf:'center',
    marginBottom:50,
    marginTop:50,
  },
});
