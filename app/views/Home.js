import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';


import Header from './../sections/Header';
import Hero from './../sections/Hero';
import Menu from './../sections/Menu';
import {StackNavigator} from 'react-navigation';

export default class Home extends Component{
  static navigationOptions:{
    header:null
  };

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Header message="CLICK TO LOGIN" />
        <Hero />
        <Menu navigate={navigate} />  {/* Note we have not added Menu to our Routes, so it was not having the navigation prop avaiable.But Home Component does have the navigation prop. And only the component with  the "navgation prop" can be navigator. */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1 //The root component has to have some sort of stying for children to layout correctly.By Default flex direction is column
  }
})