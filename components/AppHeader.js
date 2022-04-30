import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer} >
        <Text style={styles.text} >
          Alarm...App
        </Text>
        <Image style={styles.logo} source={require('../assets/AlarmIcon.png')} />
      </View>
    );


  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  textContainer: {
    backgroundColor: 'Black',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});

export default AppHeader;

