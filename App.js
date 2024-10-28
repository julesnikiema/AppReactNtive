import {useState} from 'react';
import {View, Button,Text,Modal } from 'react-native';

const LogoImg = require("./assets/adaptive-icon.png")
export default function App(){
  const[ isModalVisible, setIsModalVisible ] = useState(false)
  return(
    <View style={{flex: 1,backgroundColor:"plum", padding: 60}}> 
     <Button title="press" onPress={()=> setIsModalVisible(true)} color="black"
     />
      <Modal visible={isModalVisible} animationType="slide" presentationStyle='pageSheet' onRequestClose={() => setIsModalVisible(false)} > 

        <View style={{flex: 1,backgroundColor:"lightblue", padding : 60}}> 
        <Text> Modal content </Text>
        <Button title="close" color= "red" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
  </View>
); 
}
//  onRequestClose={() => setIsModalVisible(false)} est une propriété couramment utilisée avec le composant <Modal>.
//  Elle est déclenchée lorsque l'utilisateur essaie de fermer le modal de manière native, par exemple en appuyant en dehors 
//  du modal ou en utilisant le bouton de retour sur les appareils Android.