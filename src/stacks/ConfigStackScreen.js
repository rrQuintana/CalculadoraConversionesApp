import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import ConfigScreen from "../screens/ConfigScreen";

const ConfigStackScreen = () => {
  const ConfigStack = createNativeStackNavigator();
  return (
    <ConfigStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ConfigStack.Screen name="config" component={ConfigScreen} />
    </ConfigStack.Navigator>
  )
}

export default ConfigStackScreen