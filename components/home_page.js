import React, { useState, useEffect }  from 'react';


import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

const HomePage = ({navigation}) => {

  return (
    <ImageBackground
      source={require('../assets/Home.png')}
      style={styles.container}
    >
      <Image source={require('../assets/gol.png')} style={{position: 'absolute', marginTop: 345, marginLeft: 40}}/>
      <Text style = {{color: '#190931', fontSize: 20, fontFamily:'montserrat', fontWeight: '500', marginTop: 345, marginLeft: 130, letterSpacing: 1.3}}>Performance</Text>
      <Text style = {{color: '#190931', fontSize: 15, fontFamily:'montserrat', marginLeft: 130, opacity: 0.7}}>
        You have generated 10{"\n"}stories. 5 more to go!
      </Text>
      <TouchableOpacity onPress={() => Alert.alert('Feature Coming Soon!')} style = {{marginLeft: 130, width: '40%'}}>
        <Text style = {{color: '#A5F2D0', fontSize: 15, fontFamily:'montserrat', letterSpacing: 1.3}}>Upgrade your plan!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Start')}>
      <Text style = {{color: '#190931', fontSize: 20, marginLeft: 63, marginTop: 37, fontWeight: '400',fontFamily:'montserrat'}}>
             Generate{"\n"}Your Story
      </Text>
      </TouchableOpacity>


      <Text style = {{color: '#190931', fontSize: 20, marginLeft: 52, marginTop: 46, fontWeight: '400',fontFamily:'montserrat'}}>
        Parent Mode
      </Text>

      <Text style = {{color: '#190931', fontSize: 20, marginLeft: 47, marginTop: 98, fontWeight: '400',fontFamily:'montserrat'}}>
        Settings
      </Text>

      <Text style = {{color: '#190931', fontSize: 20, marginLeft: 160,marginTop: 15, fontWeight: '400', position: 'absolute', top: 672,fontFamily:'montserrat'}}>
        About
      </Text>

      <Text style = {{color: '#190931', fontSize: 20, marginLeft: 173,marginTop: 19,fontWeight: '400', position: 'absolute', top: 696,fontFamily:'montserrat'}}>
        Us
      </Text>

      <Text style = {{color: '#190931', fontSize: 20, marginLeft: 260, marginTop: 15, fontWeight: '400', position: 'absolute', top: 672,fontFamily:'montserrat'}}>
        Privacy
      </Text>
      <Text style = {{color: '#190931', fontSize: 20, marginLeft: 266, marginTop: 20, fontWeight: '400', position: 'absolute', top: 696,fontFamily:'montserrat'}}>
        Policy
      </Text>

      <Text style = {{color: '#190931', fontSize: 20, marginLeft: 214, fontWeight: '500', position: 'absolute', top: 470, letterSpacing: 1.1,fontFamily:'montserrat'}}>
        Old Stories
      </Text>

      <Text style = {{color: '#A5F2D0', fontSize: 13, marginLeft: 214, fontWeight: '500', position: 'absolute', top: 500, opacity: 0.7,fontFamily:'montserrat'}}>
        ~Sea-shell island
      </Text>

      <Text style = {{color: '#A5F2D0', fontSize: 13, marginLeft: 214, fontWeight: '500', position: 'absolute', top: 520, opacity: 0.7,fontFamily:'montserrat'}}>
        ~The last wild child
      </Text>

      <Text style = {{color: '#A5F2D0', fontSize: 13, marginLeft: 214, fontWeight: '500', position: 'absolute', top: 540, opacity: 0.7,fontFamily:'montserrat'}}>
        ~In the coming days
      </Text>

      <Text style = {{color: '#A5F2D0', fontSize: 13, marginLeft: 214, fontWeight: '500', position: 'absolute', top: 560, opacity: 0.7,fontFamily:'montserrat'}}>
        ~All that remains
      </Text>

      <Text style = {{color: '#A5F2D0', fontSize: 13, marginLeft: 214, fontWeight: '500', position: 'absolute', top: 580, opacity: 0.7,fontFamily:'montserrat'}}>
        ~A thief living in
      </Text>

      
      

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  
});

export default HomePage;