import React from 'react';
import { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,TouchableOpacity} from 'react-native';
import { FloatingLabelInput } from "react-native-floating-label-input";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
const CustomInput = ({label,value,onChangeText}) => {
   
    return(
        <View style={styles.container}>
             <View style={{ justifyContent: 'center', alignSelf: 'center', width: 300, flexDirection: 'row' }}>

             <FloatingLabelInput
              rightComponent={
              <View style={{ margin: 10}}>
              <MaterialIcons name="edit" size={20} color='black' />
              </View>}
                label={label}
                value={value}
                containerStyles={styles.containerStyle}
                customLabelStyles={styles.customLabelStyles}
                labelStyles={styles.labelStyles}
                inputStyles={styles.inputStyles}
                keyboardType='default'
                onChangeText={onChangeText}

              />
              </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#ECE3E2',
      flex:1
    },
    containerStyle:{
      alignSelf:'center',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: 'white',
      paddingHorizontal:5,
      margin:10

    },
    customLabelStyles:{
      colorFocused:'black',
      fontSizeFocused: 12,
      colorBlurred: 'black',

    },
    labelStyles:{
      backgroundColor: 'white',

    },
    inputStyles:{
        color: 'black'

    }

  });
export default CustomInput
