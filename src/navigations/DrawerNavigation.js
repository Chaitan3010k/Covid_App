import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Detail from  "../screens/Detail";
import SymoPre from "../screens/SymoPre";



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Chart" component={Detail} />
      <Drawer.Screen name="Symtoms" component={SymoPre} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
