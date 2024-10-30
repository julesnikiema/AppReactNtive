import {View,StatusBar,ActivityIndicator } from 'react-native';

const LogoImg = require("./assets/adaptive-icon.png")
export default function App(){
  return(
    <View style={{flex: 1,backgroundColor:"plum", padding: 60}}> 
   {/* <StatusBar  backgroundColor="green" barStyle= "dark-content" /> */}
   <ActivityIndicator />
   <ActivityIndicator  size="large"/>
   <ActivityIndicator size="large" color="red" />
   <ActivityIndicator size="large" color="red" animating={true} />



  </View>
); 
}
//  onRequestClose={() => setIsModalVisible(false)} est une propriété couramment utilisée avec le composant <Modal>.
//  Elle est déclenchée lorsque l'utilisateur essaie de fermer le modal de manière native, par exemple en appuyant en dehors 
//  du modal ou en utilisant le bouton de retour sur les appareils Android.