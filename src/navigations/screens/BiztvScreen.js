import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

//pages
import Biztv from '../../components/Biztv'
import BiztvShow from '../../components/BiztvShow'

export default function BiztvScreen() {
  return (
      <Stack.Navigator initialRouteName='Biztv'>
        <Stack.Screen options={{headerShown:false}} name='Biztv' component={Biztv} />
        <Stack.Screen options={{headerShown:false}} name='BiztvShow' component={BiztvShow} />
      </Stack.Navigator>
  )
}