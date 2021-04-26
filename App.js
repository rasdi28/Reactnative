import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <Rasdi/>
      <Photo/>
      <TextInput style= {{borderWidth:2}} />
    </View>
  ); 
}

const Rasdi = ()=> {
  return <Text>Rasdi Abdulrohman</Text>
}

const Photo = ()=> {
  return (
    <Image 
    source = {{uri : 'http://placeimg.com/100/100/tech'}}
    style = {{width:400, height:400}}
    
    />
  );
}
export default App;