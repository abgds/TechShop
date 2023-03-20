import React from 'react';
import { useNavigation} from '@react-navigation/native';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,TouchableOpacity, FlatList} from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationContainer from '@react-navigation/native';
import Home from './Home';
import AboutUs from './AboutUs';
import BuySell from './BuySell';
import RequestStatus from './RequestStatus';
import ViewParts from './ViewParts';
import ViewServices from './ViewServices';

const drawer= createDrawerNavigator();



const Drawer=()=>{
    const navigation= useNavigation();
    function CustomDrawerContent(props){
      const color='black';
      const size=30;
      return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
  
          <Image style={{height:100,width:100,resizeMode:'contain',borderRadius:30,alignSelf:'center'}} source={{uri: 'https://seeklogo.com/images/A/arid-agriculture-university-rawalpindi-logo-6A71D404ED-seeklogo.com.png'}}/>
        <View  style={{flex: 1,alignContent:'space-between'}}>
           <DrawerItem
            labelStyle={{color:'black'}}
             style={styles.DrawerItem}
            label="View All Services"
            icon={()=>(<MaterialCommunityIcons name="account-group"size={size}color={color} />)}
            onPress={()=>{navigation.navigate('View Services')}}
            />
  
          <DrawerItem
          labelStyle={{color:'black'}}
           style={styles.DrawerItem}
            label="View Spare Parts"
            icon={()=>(<MaterialCommunityIcons name="account-plus"size={size}color={color} />)}
            onPress={()=>{navigation.navigate('ViewParts')}}
            />
            <DrawerItem
            labelStyle={{color:'black'}}
             style={styles.DrawerItem}
            label="Vehicle Buy and SEll"
            icon={()=>(<MaterialCommunityIcons name="account-question"size={size}color={color} />)}
            onPress={()=>{navigation.navigate('BuySell')}}
            />
            <View style={{height:30}}></View>
            <DrawerItem
            labelStyle={{color:'black'}}
            style={styles.DrawerItem}
            label="About us"
            icon={()=>(<MaterialCommunityIcons name="message-question"size={size}color={color} />)}
            onPress={()=>{navigation.navigate('AboutUs')}}
            />
            <DrawerItem
             style={styles.DrawerItem}
            label="Request Status"
            labelStyle={{color:'black'}}
           icon={()=>(<MaterialCommunityIcons name="star-face"size={size}color={color} />)}
            onPress={()=>{navigation.navigate('RequestStatus')}}
            />
            <View style={{height:30}}></View>
            <DrawerItem
           labelStyle={{color:'black'}}
             style={styles.DrawerItem}
            label="Contact Us"
            
            icon={()=>(<MaterialCommunityIcons name="share-variant-outline" size={size}color={color}/>)}
            />
            <DrawerItem
             labelStyle={{color:'black'}}
              style={styles.DrawerItem}
            label="Sign Out"
            onPress={()=> auth().signOut()}
            icon={()=>(<MaterialCommunityIcons name="instagram" size={size}color={color} />)}
            />
           
  
            
        </View>
        </DrawerContentScrollView>
        <View>
          <Text style={{textAlign: 'center'}}>App Version 2.8</Text>
          </View>
          </View>
      )
  }
  return(
     <drawer.Navigator 
    drawerContent={CustomDrawerContent} 
    screenOptions={{headerShown: false,drawerStyle:{width:350}}}
    
    >
      <drawer.Screen name='Home' component={Home}/>
      <drawer.Screen name='Home' component={AboutUs}/>
    </drawer.Navigator>
  )}

  const stack= createNativeStackNavigator();
const Navigations = ()=> {
     return(
       <NavigationContainer>
        <stack.Navigator>
      <stack.Screen name="Drawer" component={Drawer} />
      
    </stack.Navigator>
    </NavigationContainer>

     );
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#ECE3E2',
      flex:1
    }
  });
  
  export default Navigations;