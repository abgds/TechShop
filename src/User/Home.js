import React from 'react';
import { useNavigation} from '@react-navigation/native';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,TouchableOpacity, FlatList} from 'react-native';
import 'react-native-gesture-handler';
const Home = ()=> {
     return(
      <View>
        <Text>This is Home</Text>
        
        </View>
     );
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#ECE3E2',
      flex:1
    }
  });
  
  export default Home;