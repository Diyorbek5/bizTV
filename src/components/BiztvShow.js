import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet,Image, FlatList } from 'react-native'
import React, {useState} from 'react'
import { efirda } from '../Jsons/HozirEfirda'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function BiztvShow({navigation}) {

    const onefirda = ({item}) => (
        <View style={{flexDirection:'row',padding:10,marginLeft:10}}>
            <Text style={{
                color:'#25353677',
                marginRight:10,
                fontSize:13
            }}>{item.time}</Text>
            <Text >{item.name}</Text>
        </View>
    )

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={17}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoshow}>
            <Image style={{borderRadius:19}} source={require('../assets/logo/23dwdsd.png')} />
            <AntDesign style={{position:'absolute',top:80}} name='play' color={'#fa234199'} size={65}/>
        </TouchableOpacity>

        <View style={styles.quality}>
            <TouchableOpacity style={{
                width:75,
                height:40,
                backgroundColor:'white',
                borderRadius:30,
                position:'absolute',
                left:7
            }}></TouchableOpacity>
            <Text>480</Text>
            <Text>720</Text>
            <Text>1080</Text>
        </View>

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
            <Text style={{fontSize:16,fontWeight:'700'}}>HOZIR EFIRDA</Text>
        </View>

        <FlatList 
            data={efirda}
            renderItem={ onefirda }
        />

    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    btn: {
        width:40,
        height:40,
        borderRadius:10,
        marginTop:50,
        marginLeft:21,
        backgroundColor:'#FFA4C1',
        alignItems:'center',
        justifyContent:'center',
    },
    videoshow:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    quality:{
        width:260,
        height:50,
        marginLeft:62,
        marginTop:25,
        borderRadius:25,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#D5DDED',
        flexDirection:'row'
    }
})