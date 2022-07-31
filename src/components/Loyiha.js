import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { news } from '../Jsons/YangiliklarJson'


export default function Loyiha({navigation}) {
  return (
    <SafeAreaView>
        <View style={{flexDirection:"row",alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={17}/>
        </TouchableOpacity>
        <Text style={{marginLeft:70,fontSize:16,marginTop:45}}>Loyiha haqida</Text>
      </View>

        <FlatList
            data={news}
            renderItem={({item})=>(
                <View style={{margin:20}}>
                    <Text style={styles.text}>{item.info}</Text>
                </View>
            )}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    text:{ 
        fontSize:14,
        fontWeight:'400',
        lineHeight:24,
        color:'#000'
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