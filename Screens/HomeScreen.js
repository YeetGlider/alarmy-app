import React, { Component } from 'react';
import {
  View,
  Header,
  StyleSheet,
  Text,
  TouchableOpacity,
  PlatForm,
  StatusBar,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';

import AppHeader from '../components/AppHeader.js';

export default class HomeScreen extends React.Component {
  goToSoundScreen = (buzzercolor) =>{
    this.props.navigation.navigate('SoundScreen',{color:buzzerColor})
  }
  render() {
    return (
     <View>
       <AppHeader/>
     
                
       <TouchableOpacity
              style={[styles.button,{backgroundColor:'Gray'}]}
              onPress={() => this.goToSoundScreen("Gray")}> 
              <Text style={styles.buttonText}>    Sound   </Text>
              </TouchableOpacity>
        </View>  
       
          
    );
  }}

  const styles = StyleSheet.create({
    buttonText:{
      textAlign:'center',
      color:'white'
    },
    buttons:{
      justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
    }
  });