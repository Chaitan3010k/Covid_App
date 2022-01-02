import React from 'react';
import {NavigationContainer} 
  from '@react-navigation/native'
import HomeStackNavigator 
  from './src/navigations/Navigator';
  import DrawerNavigator from './src/navigations/DrawerNavigation';

const App = () => {
  return(
    <NavigationContainer>
      <HomeStackNavigator/>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}
export default App;