import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const StorySaved = ({navigation}) => {

  return (
    <ImageBackground
      source={require('../assets/Loading.png')}
      style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>MAGIX 🪄</Text>
          <Text style={styles.subtitle}>Everyone needs a Magical Story</Text>
          <Text style={styles.para}>        Your Story was{'\n'}    Successfully Saved!</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.button}  onPress={() => navigation.popToTop()}>
            <Text style={styles.buttonText}>READ AGAIN</Text>
          </TouchableOpacity>

          <View style={styles.lineBreak} />


          <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
            <Text style={styles.buttonText}>VIEW SAVED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineBreak: {
    height: 10,
  },
  title: {
    fontSize: 24,
    fontFamily:'montserrat',
    fontWeight: '700',
    color: '#59D0B9',
    marginTop: 530,
    textAlign:'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily:'montserrat',
    fontStyle: 'italic',
    color: '#59D0B9',
    marginTop:7,
    marginBottom: 20,
  },
  para: {
    fontSize: 20,
    fontFamily:'montserrat',
    color: '#59D0B9',
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#59D0B9',
    width: 175,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default StorySaved;