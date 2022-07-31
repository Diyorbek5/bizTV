import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { korsatuvlar } from '../Jsons/Korsatuvlar'


export default function Korsatuvlar({navigation}) {

  const renderKorsatuvlar =({item})=> (
    <TouchableOpacity onPress={() => navigation.navigate('MarkaziyStudiya')}>
      <Image source={item.image}/>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={()=> navigation.navigate('Barchasi')}><Text>Barchasi</Text></TouchableOpacity>
        <TouchableOpacity><Text>Korsatuvlar</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <FlatList 
          data={korsatuvlar}
          numColumns={2}
          renderItem={renderKorsatuvlar}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
    },
    buttons:{
        marginTop:50,
        marginBottom:20,
        alignItems:'flex-start',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    text:{
      width:120,
      position:'absolute',
      bottom:50,
      left:30,
      color:'white',
      fontSize:16,
      fontWeight:'700'
    }
})