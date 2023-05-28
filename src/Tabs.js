import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CalcStackScreen from "./stacks/CalcStackScreen";
import DatosStackScreen from "./stacks/DatosStackScreen";
import PracticaStackScreen from "./stacks/PracticaStackScreen";
import ConfigStackScreen from "./stacks/ConfigStackScreen";
import { useColorScheme } from "nativewind";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const barBackgroundColor = colorScheme === "dark" ? "black" : "white";

  return (
    <NavigationContainer name="tabs">
      <Tab.Navigator>
        <Tab.Screen
          name="Calculadora de unidades"
          component={CalcStackScreen}
          options={{
            tabBarLabel: "Calculadora",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calculator"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Datos curiosos"
          component={DatosStackScreen}
          options={{
            tabBarLabel: "Interesante",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="lightbulb"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Practicar"
          component={PracticaStackScreen}
          options={{
            tabBarLabel: "Practicar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="brain" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
