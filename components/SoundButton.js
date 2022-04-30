import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';


class SoundButton extends React.Component {
    playSound = async() =>{
        await Audio.sound.createAsync(
            {uri:'https://soundcloud.com/r-a-o-759929458/boywithuke-girl-i-hope-you'},
            {uri:'https://soundcloud.com/boywithuke/blurry-nights'},
            {uri:'https://soundcloud.com/boywithuke/two-moons'},
            {shouldPlay: true }
        );
    }
    render() {
        return (
          <TouchableOpacity
            style={[styles.button,{backgroundColor:this.props.color}]}
            onPress={this.playSound}>
            <Text
              style={styles.buttonText}>
              Press Me
            </Text>
          </TouchableOpacity>
        );
      }
    }


    const styles = StyleSheet.create({
        button: {
          marginTop: 100,
          marginLeft: 80,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 200,
          backgroundColor: 'red',
          borderRadius: 100,
        },
        buttonText: {
          fontWeight: 'bold',
          fontSize: 20,
        }
      });
      
      export default SoundButton;



