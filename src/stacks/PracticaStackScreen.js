import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import PracticaScreen from "../screens/PracticaScreen";
import PracticaTiempoScreen from "../screens/PracticaTiempoScreen";
import PracticaDistanciaScreen from "../screens/PracticaDistanciaScreen";
import ExamenScreen from "../screens/ExamenScreen";

const PracticaStackScreen = () => {
  const PracStack = createNativeStackNavigator();

  return (
    <PracStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PracStack.Screen name="practica" component={PracticaScreen} />
      <PracStack.Screen name="PracticaTiempo" component={PracticaTiempoScreen} />
      <PracStack.Screen name="PracticaDistancia" component={PracticaDistanciaScreen} />
      <PracStack.Screen name="Examen" component={ExamenScreen} />
    </PracStack.Navigator>
  )
}

export default PracticaStackScreen