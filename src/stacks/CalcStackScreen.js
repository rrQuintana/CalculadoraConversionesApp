import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CalcScreen from "../screens/CalcScreen";

const CalcStackScreen = () => {
  const CalcStack = createNativeStackNavigator();

  return (
    <CalcStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <CalcStack.Screen name="calculadora" component={CalcScreen} />
    </CalcStack.Navigator>
  );
};

export default CalcStackScreen;
