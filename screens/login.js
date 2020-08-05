import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const login = props => {

  return (
    <View style={styles.mainBody}>
                <StatusBar barStyle="light-content" backgroundColor= '#000000' />
                <Text style = {styles.welcome}>Welcome</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => props.navigation.navigate('fbLogin')}>
                    <Text style={styles.buttonTextStyle}>FB Login</Text>
                </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F44336',
  },
  welcome: {
    fontSize: 30,
    margin: 10,
    color: '#FFFF00',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#2196F3',
    width: '40%'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    padding: 15,
    fontSize: 20,
    textAlign: 'center'
  },
});

export default login;