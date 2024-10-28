import {View, Text, Image, ImageBackground , ScrollView} from 'react-native';
const LogoImg = require("./assets/adaptive-icon.png")
export default function App(){
  return(
    <View style={{flex: 1,backgroundColor:"plum", padding: 60}}> 
  <ScrollView  >
      <Image source={LogoImg} style={{width:300, height:300}} />
      <Text>
      Bien sûr ! Voici un texte *Lorem Ipsum* pour vos besoins de mise en page :
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ncididuntut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laboCe texte factice est utilisé couramment 
      pour tester la présentation et le design des documents sans être distrait par le contenu.
      </Text>
      <Image source={LogoImg} style={{width:300, height:300}} />
  </ScrollView>
  </View>
);
}