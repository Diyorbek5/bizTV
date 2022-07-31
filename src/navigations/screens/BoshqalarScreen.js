import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

//pages
import Boshqalar from '../../components/Boshqalar'
import Teledastur from '../../components/Teledastur';
import Loyiha from '../../components/Loyiha'

export default function BoshqalarScreen() {
  return (
      <Stack.Navigator initialRouteName='Boshqalar'>
        <Stack.Screen options={{headerShown:false}} name='Boshqalar' component={Boshqalar} />
        <Stack.Screen options={{headerShown:false}} name='Teledastur' component={Teledastur} />
        <Stack.Screen options={{headerShown:false}} name='Loyiha' component={Loyiha} />
      </Stack.Navigator>
  )
}