import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';

export default function YangiliklarInfo({navigation, route}) {
  const item = route.params;
  return (
    <SafeAreaView style={StyleSheet.container}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={17}/>
        </TouchableOpacity>
        <Image style={styles.img} source={item.image} />
        <View style={{marginTop:170}}>
          <Text style={{fontWeight:'700',padding:15,fontSize:18}}>{item.name}</Text>
          <ScrollView style={styles.text}><Text>{item.info}</Text></ScrollView>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    btn: {
        width:40,
        height:40,
        borderRadius:10,
        marginTop:50,
        marginLeft:21,
        backgroundColor:'#FFFFFF69',
        zIndex:12,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
      padding:15
    },
    img:{
      width:400,
      height:270,
      position:'absolute',
      top:1,
    }
})