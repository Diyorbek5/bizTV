import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, Image, Button } from 'react-native'
import React from 'react'
import { barchasi } from '../Jsons/Barchasi'
import AntDesign from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Barchasi({navigation}) {

  const renderBarchasi = ({item}) => (
    <View style={{paddingHorizontal:"9%",marginTop:20}}>
        <TouchableOpacity>
        <Image style={styles.img} source={item.image} />
        <Icon style={styles.playIcon} color={'#25353999'} size={55} name='play-circle'/>
        </TouchableOpacity>
        <Text style={styles.title}>{item.name}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={styles.btn}><AntDesign name="share" size={15} color='#0071D4'/></TouchableOpacity>
                <TouchableOpacity style={styles.btn}><AntDesign name="thumbs-up" size={15} color='#0071D4'/></TouchableOpacity>
                <Text style={{marginLeft:2,fontSize:12}}>{item.ball}</Text>
            </View>
            <Text style={{color:'#75758C',marginRight:19}}>{item.time}</Text>
        </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity><Text>Barchasi</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Korsatuvlar')}><Text>Korsatuvlar</Text></TouchableOpacity>
      </View>

      <FlatList 
        data={barchasi}
        renderItem={renderBarchasi}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
    },
    buttons:{
        marginTop:30,
        alignItems:'flex-start',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    img:{
        borderRadius:10
    },
    title:{
        fontWeight:'700',
        marginTop:9,
        color:'#2945AB',
        fontSize:14
    },
    btn:{
      width:30,
      height:30,
      borderRadius:15,
      marginRight:5,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#32C5FF42',
    },
    playIcon:{
      position:'absolute',
      top:75,
      left:140
    }
})