import { View, Text } from 'react-native'
import React from 'react'
import { useColorScheme } from "nativewind";

const ConfigScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="dark:bg-black">
      <Text className="">ConfigScreen</Text>
      <Text>Color scheme: {colorScheme}</Text>
      <Text onPress={toggleColorScheme}>Toggle color scheme</Text>

    </View>
  )
}

export default ConfigScreen