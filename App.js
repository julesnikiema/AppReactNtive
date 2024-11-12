import {View,Button,Alert, Text,StyleSheet} from 'react-native';
// import Greet from "./components/Greet"

const LogoImg = require("./assets/adaptive-icon.png")
export default function App(){
  return(
    <View style={styles.container}> 
    {/* <Greet name="brice" /> */}
    {/* <Text style={styles.title}>Stylesheet API</Text> */}
    <View style={styles.darkMode}>
      <Text style={styles.darkModetext} >
        style inheritance 
        <Text style={styles.boldText}> in bold text</Text>
      </Text>
    </View>
    <View style={[styles.box, styles.lightbluebg, styles.androidShadow ]}>
      <Text style= {{borderRadius :5, backgroundColor:"red "}}>light blue box </Text>
    </View>
    <View style={[styles.box, styles.lightgreenbg,styles.androidShadow]}>
      <Text>light green box </Text>
    </View>
  </View>
); 
}
const styles = StyleSheet.create({
 container : { flex: 1,backgroundColor:"white", padding: 60},
 darkMode:{
  backgroundColor:"black",
 },
 boldText:{
  fontWeight : "condensed",
  color:"red",
 },
 darkModetext:{
  color:"white" 
 },
 box:{
  width:150,
  height:150,
  paddingHorizontal:10,
  paddingVertical: 20,
  marginVertical:10,
  borderWidth: 2,
  margin : 50
 },
 
 lightbluebg :{backgroundColor:"lightblue"},

 lightgreenbg: { 
  backgroundColor :"green"},

  boxShadow:{
    shadowColor:"red",
    shadowOffset:{
      width: 16,
      height: 16,
    },
    shadowOpacity:0.6,
    shadowRadius:4 
  },
  androidShadow:{
    shadowColor:"red",
    elevation :50,
    
    shadowOpacity:190,
    shadowRadius:4
  }
  
});