import React from 'react';
import {createStackNavigator} 
    from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import SymoPre from '../screens/SymoPre';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name = "Home"
                component={Home}
            />
             <Stack.Screen
                name = "Detail"
                component={Detail}
            />
             <Stack.Screen
                name = "SymoPre"
                component={SymoPre}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;