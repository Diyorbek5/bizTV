import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

//pages
import Yangiliklar from '../../components/Yangiliklar'
import YangiliklarInfo from '../../components/YangiliklarInfo'

export default function YangiliklarScreen() {
  return (
      <Stack.Navigator initialRouteName='Yangiliklar'>
        <Stack.Screen options={{headerShown:false}} name='Yangiliklar' component={Yangiliklar} />
        <Stack.Screen options={{headerShown:false}} name='YangiliklarInfo' component={YangiliklarInfo} />
      </Stack.Navigator>
  )
}