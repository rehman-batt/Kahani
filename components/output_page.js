import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
// import _storyAudio from '../assets/sample.mp3';



const OutputPage = ({navigation, route}) => {
  
  var Sound = require('react-native-sound');

  Sound.setCategory('Playback');

  

  var ding = new Sound(route.params._storyAudio, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log(
      'duration in seconds: ' +
        ding.getDuration() +
        'number of channels: ' +
        ding.getNumberOfChannels(),
    );
  });
  
  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);
  const playPause = () => {
    ding.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.background}>
      
        <Image
          source={require('../assets/header.png')}
          style={styles.topImage}
        />

        <View style={styles.content}>
          <ScrollView>
            <View style={styles.roundBox}>
              <Text style={styles.boxText}>Story</Text>
              <Text style={styles.boxText}>{route.params._story}</Text>
            </View>
          </ScrollView>

          
        </View>
        <View style = {{marginTop: 30, marginBottom: 30}} >
        <Image 
            source={route.params._image === 'fetched' ? require('../assets/sample.jpg') : require('../assets/error.png')}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={playPause}>
            <Text style={styles.buttonText}>Play Audio</Text>
          </TouchableOpacity>
        </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGENERATE</Text>
      </TouchableOpacity>

      <View style={styles.lineBreak} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Saved')}>
        <Text style={styles.buttonText}>SAVE STORY!</Text>
      </TouchableOpacity>
    </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190931',
  },
  lineBreak: {
    height: 10,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems:  'center',
  },
  topImage: {
    width:388,
    resizeMode: 'contain',
    marginTop:0,
    alignItems:  'center',

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundBox: {
    backgroundColor: '#A87FC4',
    width: 325,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  boxText: {
    fontSize: 18,
    paddingTop:10,
    paddingBottom:10,
    marginLeft:15,
    marginRight:15,

    color: 'black',
  },
  button: {
    backgroundColor: '#59D0B9',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  buttonText: {
    color: '#190931',
    fontFamily:'montserrat',
    fontWeight:'600',
    fontSize: 20,
  },
});

export default OutputPage;