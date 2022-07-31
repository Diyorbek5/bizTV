import { View, Text, StyleSheet,SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons'


export default function Boshqalar({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.socials}>
        <TouchableOpacity style={styles.socialLink}>
          <Icon color={'#2168EF'} size={15} name='facebook'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLink}>
          <Icon color={'#FF3B50'} size={15} name='google-plus'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLink}>
          <Icon color={'#1AB4F9'} size={15} name='twitter'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLink}>
          <Icon color={'#FF3C8C'} size={15} name='instagram'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLink}>
          <Icon color={'#FF8519'} size={15} name='wifi'/>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Teledastur')} style={styles.dasturlar}>
          <Image resizeMode='contain' style={{marginRight:-5}} source={require('../assets/logo/biztvcopy.png')} />
          <Text style={styles.text}>Teledasturlar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dasturlar}>
          <Icons color={'tomato'} size={20} name='volume-high'/>
          <Text style={styles.text}>Reklama</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dasturlar}>
          <Icons color={'#FFA4C1'} size={20} name='pin'/>
          <Text style={styles.text}>Biz bilan aloqa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <TouchableOpacity onPress={()=> navigation.navigate('Loyiha')} style={styles.border}><Text style={styles.text2}>Loyiha haqida</Text></TouchableOpacity>
        <TouchableOpacity style={styles.border}><Text style={styles.text2}>Foydalanish shartlari</Text></TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.border}><Text style={styles.text2}>Bildirishnoma</Text></TouchableOpacity>
          <Icon style={{marginRight:30}} name='toggle-on' size={25} color={'#FFA4C1'}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    padding: 10
  },
  socials:{
    width:240,
    height:50,
    backgroundColor:'#DADCE0',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderRadius:23,
    marginBottom:22
  },  
  socialLink:{
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  dasturlar:{
    width:335,
    height:60,
    flexDirection:'row',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'flex-start',
    borderRadius:8,
    marginTop:10,
    padding:19,
    shadowColor:'#09090024',
    shadowOffset: {width: -1, height: 13},
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  text:{
    fontSize:16,
    color:'#080040',
    marginLeft:16,
    letterSpacing:-0.256,
    lineHeight:24
  },
  info:{
    width:335,
    height:194,
    borderRadius:8,
    marginTop:30,
    backgroundColor:'white',
    shadowColor:'#09090922',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent:'space-around',    
  },
  text2:{
    fontSize:16,
    color:'#080040',
    marginLeft:-20,
    letterSpacing:-0.256,
    lineHeight:24,
  },
  border:{
    borderBottomWidth:1,
    padding:20,
    borderBottomColor:'#EFF4FB',
    marginLeft:25
  }
})