import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View } from 'react-native';
const Stack = createStackNavigator();

import Barchasi from '../../components/Barchasi';
import Korsatuvlar from '../../components/Korsatuvlar';
import MarkaziyStudiya from '../../components/MarkaziyStudiya';

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName={Barchasi}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Barchasi"
        component={Barchasi}
      />
      <Stack.Screen
        name="Korsatuvlar"
        component={Korsatuvlar}
      />
       <Stack.Screen
        name="MarkaziyStudiya"
        component={MarkaziyStudiya}
      />
    </Stack.Navigator>
  );
}
