import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar, Image} from 'react-native';
const Card = ({name,bio,des,image})=>{
     return(
        <View style={{justifyContent:"center",height:400}}>
            <Text>{name}</Text>
            <Text>{bio}</Text>
            <Image  style={styles.image} source={{uri:image}} resizeMode="contain" />
            <Text>{des}</Text>
        </View>
     );
}
const styles = StyleSheet.create({
    image:{
        width:200,
        height:200,
        borderColor:"black",
        borderRadius:15
     
    }
  });
export default Card;
