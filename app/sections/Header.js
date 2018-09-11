import React,{Component} from 'react';
import {StyleSheet,View,Text,Platform,Image} from 'react-native';

export default class Header extends Component{
  // For Header default message will come as props "CLICK TO LOGIN"
  constructor(props){
    super(props);

    this.state = {
      isLogged:false
    }
  }

  toggleUser = ()=>{
    // We must not mutate the state:
    let previousState = this.state.isLogged;
    this.setState({
      isLogged:!previousState
    })
  };

  render(){
    let display = this.state.isLogged ? "Display User" : this.props.message;
    return(
      <View style={styles.headStyle}>
        <Image source={ require('./img/emmeiwhite.png') } style={styles.logo} />
  
        <Text style={styles.headText} onPress={this.toggleUser} > {display}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headStyle:{
    paddingTop:30,
    paddingRight:10,
    paddingBottom:10,
    backgroundColor:Platform.OS==='android'?'teal':'skyblue',
    flex:1,
    flexDirection:'row'
  },
  headText:{
    textAlign:'right',
    color:'#ffffff',
    flex:1
  },
  logo:{
    flex:1,
    height:undefined,
    width:undefined
  }

})