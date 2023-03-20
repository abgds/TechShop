
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';




const App =()=>{
 
  return (
   <View>
   <Text style={styles.sectionContainer}>
   This is TechShop Project
   </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  View:{
    alignContent:"center"
  },
  sectionContainer: {
    fontSize:"20",
    fontWeight:"bold",
    alignContent:"center"
    
  }
});

export default App;
