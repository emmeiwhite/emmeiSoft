import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

import Header from './../sections/Header';

export default class Contact extends Component{
  // To Hide the Default Navigation that comes with StackNavigator
  static navigationOptions = {
    header:null
  };

  render(){
    return(
    <View style={styles.container}>
      <Header message="CLICK TO LOGIN" />
      <Text style={{flex:8}}>Here we will use Form</Text>
      <Text style={{flex:6}}>Here also something !!!</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})