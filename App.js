import {View, Text, Image, ImageBackground } from 'react-native';
const LogoImg = require("./assets/adaptive-icon.png")
export default function App(){
  return(
  <View style={{flex: 1,backgroundColor:"plum", padding: 60}} >
    
      {/* <Text>
      <Text style={{ color : "white" }} >  hello</Text> word
      </Text> 
      <Image source={LogoImg} style={{width:300, height:300}} />
      <Image source={{uri : "https://picsum.photos/200/300/?blur"}} style={{width:300, height:300}} /> */}

      <ImageBackground source={LogoImg} style={{flex :1 }} >
        <Text>
          hello word 
        </Text>
      </ImageBackground>

  </View>
);
}