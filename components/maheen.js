import React, { useState } from 'react';
import { SelectList} from 'react-native-dropdown-select-list';
import {Icon } from '@rneui/themed';
import CheckBox from '@react-native-community/checkbox';


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
  TextInput,
  ScrollView
} from 'react-native';

const StartStory = ({navigation}) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedNarration, setSelectedNarration] = useState('');
  const [selectedDifficulty, setSelectedDifficulty]=useState('');
  const [selectedLanguage, setSelectedLanguage]=useState('');
  const [isSelectedVisuals, setSelectionVisuals] = useState(false);
  const [isSelectedAudio, setSelectionAudio] = useState(false);
  const [text, setText] = useState('');



  const genreData = [
    {key:'1', value:'Superhero'},
    {key:'2', value:'Action'},
    {key:'3', value:'Drama'},
    {key:'4', value:'Horror'},
    {key:'5', value:'Thriller'},
    {key:'6', value:'SciFi'},
  ];

  const NarrationData = [
    {key:'1', value:'First Person'},
    {key:'2', value:'Second Person'},
    {key:'3', value:'Third Person'},
  ];

  const DifficultyData = [
    {key:'1', value:'Easy'},
    {key:'2', value:'Medium'},
    {key:'3', value:'Hard'},
  ];

  const LanguageData = [
    {key:'1', value:'English'},
    {key:'2', value:'Urdu'},
  ];
  
  const VisualsData = [
    {key:'1', value:'Yess!'},
    {key:'2', value:'No, I dont want Visuals'},
  ];

  const AudioData = [
    {key:'1', value:'Yess!'},
    {key:'2', value:'No, I dont want Audio'},
  ];

  

  return (
    <View style={styles.container}>
    <ScrollView>
      
      <View style={styles.background}>
        <Image
          source={require('../assets/wxyz.png')}
          style={styles.topImage}
        />
        </View>

    
      <View style={{paddingHorizontal:20,paddingVertical:15,flex:1}}>

      <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat',paddingTop: 20,paddingBottom:10 }}>Genre</Text>
        <SelectList 
          data={genreData}
          setSelected={setSelectedGenre}
          dropdownStyles={{backgroundColor:'#A87FC4'}}
          dropdownItemStyles={{marginHorizontal:10}}
          dropdownTextStyles={{color: '#190931', fontFamily: 'Montserrat'}}
          placeholder='Genre'
          inputStyles={{color:'#59D0B9'}}
          defaultOption= {{key:'1', value:'Superhero'}}

          // boxStyles={}
          searchicon={<Image source={require('../assets/1.png')}/>}
        />

<Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat',paddingTop: 20,paddingBottom:10 }}>Point of Narration</Text>
        <SelectList 
          data={NarrationData}
          setSelected={setSelectedNarration}
          dropdownStyles={{backgroundColor:'#A87FC4'}}
          dropdownItemStyles={{marginHorizontal:10}}
          dropdownTextStyles={{color: '#190931', fontFamily: 'Montserrat'}}
          placeholder='Point of Narration'
          inputStyles={{color:'#59D0B9'}}
          searchicon={<Image source={require('../assets/2.png')}/>}
        />

         <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat',paddingTop: 20,paddingBottom:10 }}>Difficulty Level</Text>
        <SelectList 
          data={DifficultyData}
          setSelected={setSelectedDifficulty}
          dropdownStyles={{backgroundColor:'#A87FC4'}}
          dropdownItemStyles={{marginHorizontal:10}}
          dropdownTextStyles={{color: '#190931', fontFamily: 'Montserrat'}}
          placeholder='Difficulty Level'
          inputStyles={{color:'#59D0B9'}}
          searchicon={<Image source={require('../assets/3.png')}/>}
        />

         <Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat',paddingTop: 20,paddingBottom:10 }}>Language</Text>

        <SelectList 
          data={LanguageData}
          setSelected={setSelectedLanguage}
          dropdownStyles={{backgroundColor:'#A87FC4'}}
          dropdownItemStyles={{marginHorizontal:10}}
          dropdownTextStyles={{color: '#190931', fontFamily: 'Montserrat'}}
          inputStyles={{color:'#59D0B9'}}
          placeholder={'Language'}
          searchicon={<Image source={require('../assets/4.png')}/>}
        />

<Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat',paddingTop: 20,paddingBottom:10 }}>Visuals and Graphics</Text>
        <SelectList 
          data={VisualsData}
          setSelected={setSelectionVisuals}
          dropdownStyles={{backgroundColor:'#A87FC4'}}
          dropdownItemStyles={{marginHorizontal:10}}
          dropdownTextStyles={{color: '#190931', fontFamily: 'Montserrat'}}
          inputStyles={{color:'#59D0B9'}}
          placeholder='Visuals and Graphics'
          searchicon={<Image source={require('../assets/5.png')}/>}
        />

<Text style={{ color: '#FFFFFF', fontFamily: 'Montserrat',paddingTop: 20,paddingBottom:10 }}>Audio</Text>
        <SelectList 
          data={AudioData}
          setSelected={setSelectionAudio}
          dropdownStyles={{backgroundColor:'#A87FC4'}}
          dropdownItemStyles={{marginHorizontal:10}}
          dropdownTextStyles={{color: '#190931', fontFamily: 'Montserrat'}}
          inputStyles={{color:'#59D0B9'}}
          placeholder='Audio'
          searchicon={<Image source={require('../assets/6.png')}/>}
        />

<View style={{ paddingTop: 30 }}>

      <TextInput
        style={styles.input}
        
        onChangeText={setText}
        value={text}
        placeholder="Start writing here..."
        multiline={true}
        numberOfLines={5}
        autoFocus={true}         
        placeholderTextColor={'#59D0B9'}
        // backgroundColor='white'

      />
      </View>

      <View style={styles.lineBreak} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Generate', {genre: selectedGenre, prompt: text})}>
        <Text style={styles.buttonText}>GENERATE STORY!</Text>
      </TouchableOpacity>

        </View>
        
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#A87FC4',
    backgroundColor: '#190931',
  },
  placeholder: {
    color: 'white',
  },
  selectListContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  
  lineBreak: {
    height: 60,
  },
  button: {
    flex:1,
    backgroundColor: '#59D0B9',
    width: 175,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginLeft:85,
  },
  buttonText: {
    color: '#190931',
    fontFamily:'montserrat',
    fontWeight:'600',
    fontSize: 20,
  },
  input: {
    height: 120,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 16,
    color:'white',
  },
  // TextInput:{
  //   paddingTop:100,
  // },
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
  image: {
    height: 150,
    resizeMode: 'cover',
  },
  selectContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    flex: 1,
  },
  dropdown: {
    backgroundColor: '#A87FC4',
  },
  dropdownItem: {
    marginHorizontal: 10,
    padding:5,
  },
  dropdownText: {
    color: '#A5F2D0',
    fontFamily: 'Montserrat',
  },
  label: {
    margin: 8,
    fontFamily:'Montserrat'
  },
});
  

export default StartStory;