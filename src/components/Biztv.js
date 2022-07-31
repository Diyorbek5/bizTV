import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function BiztvScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{marginBottom:15}}>
      <Text style={{padding:10,fontSize:16,fontWeight:'500'}}>Assalomu alaykum, iltimos bizning kanallaridan birini tanlang</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('BiztvShow')} style={styles.biztv}>
      <Image style={{flex:1, resizeMode:'contain',width:177}} source={require('../assets/logo/biztv.png')}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('BiztvShow')} style={styles.bizcinema}>
      <Image style={{flex:1,resizeMode:'contain'}}  source={require('../assets/logo/bizcinema.png')}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('BiztvShow')} style={styles.bizmusic}>
      <Image style={{flex:1,resizeMode:'contain'}}  source={require('../assets/logo/bizmusic.png')}/>
    </TouchableOpacity>
  </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  biztv:{
    width: '95%',
    height:158,
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FF4C98',
  },
  bizcinema: {
    width: '95%',
    height:158,
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#12245E',
    marginVertical:20
  },
  bizmusic: {
    width: '95%',
    height:158,
    borderRadius:19,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'blue',
  }
})