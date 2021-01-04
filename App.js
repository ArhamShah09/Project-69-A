import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component() {
  render () {
    return (
      <View>
        <Image></Image>
        <TouchableOpacity
        onPress = { this.getCameraPermissions }
        style = { styles.scanButton }
        title = "Bar Code Scanner">
          <Text style={styles.buttonText}>
            Scan QR Code
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  buttonText: { 
    fontSize: 20,
    textAlign : 'center',
    marginTop : 10
  },
  scanButton:{
    backgroundColor : 'brown',
    width : 50,
    borderWidth : 1.5
  }
});
