import {View,Button,Alert } from 'react-native';

const LogoImg = require("./assets/adaptive-icon.png")
export default function App(){
  return(
    <View style={{flex: 1,backgroundColor:"plum", padding: 60}}> 
   <Button title="alert "  color="red"onPress={() => Alert.alert("invalid DATA!") }/>
   <Button title="alert2 "  color="green"onPress={() => Alert.alert("invalid DATA!", "DOB INCORRET ") }/>
   <Button title="supprimer"  color="red"onPress={() => Alert.alert("ATTENTION","Voulez vous vraiment supprimer ?",[
    {
      text:"Annuler",
      onPress: () => console.log("cancel pressed")
    },
    {
      text: "oui",
      onPress: () => console.log( "ok pressed"),

    }
   ]) }/>


  </View>
); 
}
