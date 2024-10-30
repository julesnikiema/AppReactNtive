import {View,Button,Alert, Text,StyleSheet} from 'react-native';
// import Greet from "./components/Greet"

const LogoImg = require("./assets/adaptive-icon.png")
export default function App(){
  return(
    <View style={styles.container}> 
    {/* <Greet name="brice" /> */}
    {/* <Text style={styles.title}>Stylesheet API</Text> */}
    <View>
      <Text style={[styles.box ,styles.lightbluebg]}>light blue box </Text>
    </View><View>
      <Text  style={[styles.box, styles.lightgreenbg]} >light green box </Text>
    </View>
  </View>
); 
}
const styles = StyleSheet.create({
 container : { flex: 1,backgroundColor:"plum", padding: 60},
 box:{
  padding : 10,
  width: 100,
  height :100,
  margin : 50
 },
 
 lightbluebg :{backgroundColor:"lightblue"},

 lightgreenbg: {
  backgroundColor :"green"}
  
});