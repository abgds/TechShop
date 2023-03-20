
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,TouchableOpacity, FlatList} from 'react-native';
import Navigations from './src/User/Navigations';



const App =()=>{
  return (
    <View>
      <Navigations />
   
   
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ECE3E2',
    flex:1
  }
});

export default App;
