import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

//screens
import Biztv from './screens/BiztvScreen'
import Yangiliklar from './screens/YangiliklarScreen'
import Korsatuvlar from './screens/KorsatuvlarScreen'
import Boshqalar from './screens/BoshqalarScreen'

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#E1084D',
          inactiveTintColor: '#75758C',
          labelStyle: { marginBottom: 1,fontSize: 12 }
        }}
        initialRouteName={Biztv}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let rn = route.name;

            if (rn === 'biz tv') {
              iconName = focused ? 'live-tv' : 'live-tv';

            } else if (rn === 'yangiliklar') {
              iconName = focused ? 'article' : 'article';

            } else if (rn === "ko'rsatuvlar") {
              iconName = focused ? 'videocam' : 'videocam';
            
            } else if (rn === 'boshqa') {
              iconName = focused ? 'more-horiz' : 'more-horiz';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        >

        <Tab.Screen options={{headerShown: false}} name='biz tv' component={Biztv} />
        <Tab.Screen options={{headerShown: false}} name='yangiliklar' component={Yangiliklar} />
        <Tab.Screen options={{headerShown: false}} name="ko'rsatuvlar" component={Korsatuvlar} />
        <Tab.Screen options={{headerShown: false}} name='boshqa' component={Boshqalar} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}