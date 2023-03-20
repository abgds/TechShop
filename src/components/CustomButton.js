
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,TouchableOpacity} from 'react-native';




const CustomButton =({label,style})=>{
 
  return (
    <View style={styles.container}>
    <TouchableOpacity style={[styles.button , style]}>
      <Text style={styles.ButtonText}>{label}</Text>
   </TouchableOpacity>
   
  </View> 
  
  );
}
const styles = StyleSheet.create({
    button:{
        width: "80%",
        height:50,
        backgroundColor:'#F8333D',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:30,
        marginRight:20,
        marginTop:"3%",
        marginBottom:'3%'
    
    },
    
    ButtonText:{
      fontWeight:"bold",
      alignContent:"center",
      color:'white',
    fontSize:15}
  
});

export default CustomButton;
