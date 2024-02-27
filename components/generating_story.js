import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';



const GeneratingPage = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiCall, setAPICall] = useState(true);
  const [story, setStory] = useState('');
  const [audio, setAudio] = useState('');
  const [image, setImage] = useState('');
  // const navigation = useNavigation();

  const generateStory = async () => {
    try {
      const response = await fetch("http://192.168.100.91:5000/generate?genre="+route.params.genre+"&prompt="+route.params.prompt);
      const result = await response.text();
      setStory(result);
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await fetch("http://192.168.100.91:5000/audio?story="+story);
      const result = await response;
      setAudio('fetched');
    } catch (error) {
      console.error(error);
    }
    
    try {
      const response = await fetch("http://192.168.100.91:5000/image?story="+story);
      const result = await response;
      setImage('fetched');
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  

  };

  useEffect(() => { 
    if (apiCall) 
      { 
        generateStory();
        setAPICall(false);
      }
    });

  useEffect(() => {
    if (!isLoading) {
      navigation.navigate('Out', {_story: story, _audio: audio, _image: image});
    }
  }, [isLoading, navigation]);

  return (
    <ImageBackground
      source={require('../assets/Loading.png')}
      style={styles.container}>
      <Text style={styles.title}>MAGIX 🪄</Text>
      <Text style={styles.subtitle}>Everyone needs a Magical Story</Text>
      <Text style={styles.para}>Generating Story...</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#59D0B9" />
      ) : null}
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
  para: {
    fontSize: 20,
    fontFamily:'montserrat',
    color: '#59D0B9',
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default GeneratingPage;