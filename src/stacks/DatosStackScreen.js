import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import DatosScreen from "../screens/DatosScreen";

const DatosStackScreen = () => {
  const DatosStack = createNativeStackNavigator();
  return (
    <DatosStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DatosStack.Screen name="datos" component={DatosScreen} />
    </DatosStack.Navigator>
  )
}

export default DatosStackScreen