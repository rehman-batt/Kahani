import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

const LoadingPage = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching or content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/Loading.png')}
      style={styles.container}>
      <Text style={styles.title}>MAGIX 🪄</Text>
      <Text style={styles.subtitle}>Everyone needs a Magical Story</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#59D0B9" style={styles.spinner} />
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>GET STARTED!</Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily:'montserrat',
    fontWeight: '700',
    color: '#59D0B9',
    marginTop: 380,
  },
  subtitle: {
    fontSize: 16,
    fontFamily:'montserrat',
    fontStyle: 'italic',
    color: '#59D0B9',
    marginTop:7,
    marginBottom: 20,
  },
  spinner: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#59D0B9',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#190931',
    fontFamily:'montserrat',
    fontWeight:'600',
    fontSize: 20,
  },
});

export default LoadingPage;



