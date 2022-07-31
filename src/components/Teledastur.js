import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {hafta} from '../Jsons/HaftaKunlar'
import {efirda} from '../Jsons/HozirEfirda'

export default function Teledastur({navigation}) {

  const renderHaftaKunlar =({item}) => (
    <SafeAreaView style={styles.container}>
    <View style={{padding:15}}>
            <TouchableOpacity style={{
                width:20,
                height:20,
                borderRadius:10,
                backgroundColor:'#FFA4C1',
                position:'absolute',
                top:14,
                left:8
            }}></TouchableOpacity>
            <Text style={{fontSize:16,fontWeight:'700'}}>{item.name}</Text>
        </View>
    <FlatList
      data={efirda}
      renderItem={({item})=>(
        <View style={{flexDirection:'row',padding:9}}>
            <Text style={{
                color:'#25353677',
                marginRight:10,
                fontSize:13
            }}>{item.time}</Text>
            <Text >{item.name}</Text>
        </View>
      )}
    />
    </SafeAreaView>
  )


  return (
    <SafeAreaView>
      <View style={{flexDirection:"row",alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={17}/>
        </TouchableOpacity>
        <Text style={{marginLeft:70,fontSize:16,marginTop:45}}>Teledasturlar</Text>
      </View>

        <FlatList
          data={hafta}
          renderItem={renderHaftaKunlar}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    marginHorizontal:15,
  },
    button: {
        width:40,
        height:40,
        borderRadius:10,
        marginTop:50,
        marginLeft:21,
        backgroundColor:'#FFA4C1',
        alignItems:'center',
        justifyContent:'center',
    }
})