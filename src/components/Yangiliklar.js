import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { news } from '../Jsons/YangiliklarJson'

export default function Yangiliklar({navigation}) {

    const info = [
        { name: 'Barchasi', backColor:'#FFA4C145', color:'#E1084D'},
        { name: 'Madaniyat', backColor:'#55C5F845', color:'#0071D4'},
        { name: 'Iqtisod', backColor:'#FB946345', color:'#FA6400'},
        { name: 'Siyosat', backColor:'#16B67F45', color:'#12B649'},
    ]


    const renderNews = ({item}) => (
     <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginRight:100, paddingHorizontal:20,marginTop:17}} onPress={()=>navigation.navigate('YangiliklarInfo', item)}>
        <Image style={{borderRadius:8}} source={item.image} />  
               <View style={{paddingHorizontal:10}}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={styles.sort}>{item.sort}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </View>
     </TouchableOpacity>
    )


  return (
    <SafeAreaView style={StyleSheet.container}>
      
      <FlatList 
        data={info}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <View>
                <TouchableOpacity style={styles.topBtn}>
                <Text style={{width:100,height:40,marginTop:20,marginLeft:12,textAlign:'center',padding:11,alignItems:'center',justifyContent:'center', backgroundColor: item.backColor, color: item.color,borderRadius:12}}>{item.name}</Text>
            </TouchableOpacity>
            </View>
        )}
      />
      
      <TouchableOpacity>
        <Image style={styles.img} resizeMode='contain' source={require('../assets/newsimage/510578359.png')} />
        <View style={{paddingHorizontal:20,marginTop:-8}}>
            <Text style={{fontSize:13,fontWeight:'700'}}>Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
                <Text style={{marginRight:14,fontWeight:'800',padding:5,borderRadius:12,fontSize:10,backgroundColor:'#16B67F45',color:'#1FB884'}}>СПОРТ</Text>
                <Text style={{fontSize:10,padding:5}}>ВЧЕРА, 23:00</Text>
            </View>
        </View>
      </TouchableOpacity>

      <FlatList 
        data={news}
        keyExtractor={item => item.id}
        renderItem={renderNews}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    img:{
        margin:20,
        borderRadius:8
    },
    title:{
        fontWeight:'700',
        fontSize:13,
        lineHeight:18
    },
    sort:{
        marginRight:14,
        fontWeight:'800',
        padding:5,
        borderRadius:8,
        fontSize:10,
        backgroundColor:'#16B67F45',
        color:'#1FB884'
    },
    time:{
        fontSize:10,
        padding:5
    },
    topBtn:{
        flexDirection:'row',
        borderRadius:23
    }
})