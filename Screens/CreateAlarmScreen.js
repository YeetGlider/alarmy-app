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

import SoundButton from '../Screens/SoundScreen';

export default class CreateAlarmScreen extends React. Component {
    render() {
      return (
       <View>
         
        <AppHeader/>  
         
        <SoundButton color = {this.props.navigation.getParam('color')}/>
          
          </View>  
            
      );
    }}






