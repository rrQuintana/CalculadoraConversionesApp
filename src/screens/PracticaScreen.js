import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const PracticaScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <View className="flex p-5">
        <Text className="font-bold text-2xl text-center mb-5">¿Qué quieres aprender hoy?</Text>
        <Image
          source={require("../assets/img/practice-image-1.png")}
          className="w-full h-28"
        />
        <Text className="text-xl text-center mt-5">Practica</Text>
        <Text className="text-center mb-5">
          Practica lo que has aprendido con ejercicios y retos
        </Text>
        <TouchableOpacity
          className="bg-blue-500 rounded-lg py-3 px-5 mb-5"
          onPress={() => navigation.navigate("PracticaTiempo")}
        >
          <Text className="text-white text-center">Practicar tiempos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-500 rounded-lg py-3 px-5"
          onPress={() => navigation.navigate("PracticaDistancia")}
        >
          <Text className="text-white text-center">Practicar distancias</Text>
        </TouchableOpacity>
        <Text className="text-xl text-center mt-8">Examen</Text>
        <Text className="text-center mb-5">
          Demuestra lo que has aprendido con un examen
        </Text>
        <TouchableOpacity
          className="bg-blue-500 rounded-lg py-3 px-5 mb-5"
          onPress={() => navigation.navigate("Examen")}
        >
          <Text className="text-white text-center">Examen de los temas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PracticaScreen;
