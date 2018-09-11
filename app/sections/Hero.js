import React,{Component} from 'react';
import {Image,StyleSheet} from 'react-native';

export default class Hero extends Component{
  render(){
    return(
      <Image 
        style={styles.heroImage} 
        source={ require('./img/hero.jpeg') }
      />
    )
  }
}

const styles = StyleSheet.create({
    heroImage:{
      flex:8,
      height:undefined,
      width:undefined
    }
})