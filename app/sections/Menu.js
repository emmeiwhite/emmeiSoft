import React,{Component} from 'react';
import {TouchableOpacity,StyleSheet,StackNavigator,View,Text,Alert} from 'react-native';

export default class Menu extends Component{

  onButtonPress = ()=>{
    Alert.alert('You tapped the Button Menu!');
  }

  render(){
    return(
      <View style={styles.container}>
        
        <View style={styles.buttonRow}>

            {/*TouchableOpacity : Gesture Handling Component. Fades after Click*/}
            <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress}>
                <Text style={styles.textStyle}>LESSONS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress}>
                <Text style={styles.textStyle}>REGISTER</Text>
            </TouchableOpacity>      
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress}>
                <Text style={styles.textStyle}>BLOG</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.props.navigate('ContactRT')}}>
                <Text style={styles.textStyle}>CONTACT</Text>
            </TouchableOpacity>      
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress}>
                <Text style={styles.textStyle}>QUIZ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress}>
                <Text style={styles.textStyle}>ABOUT</Text>
            </TouchableOpacity>      
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:6,
    backgroundColor:'teal'
  },
  buttonRow:{
    flex:2,
    flexDirection:'row',
    borderColor:'#ffffff',
    alignItems:'center',
    borderBottomWidth:1
  },
  buttonStyle:{
    height:'50%',
    width:'50%',
    backgroundColor:'teal',
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{   
    fontSize:18,
    color:'#ffffff'
  }
})