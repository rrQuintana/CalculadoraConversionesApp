import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import ExamenCard from "./ExamenCard";

const ExamenScreen = () => {
  const [showInstrucciones, setShowInstrucciones] = useState(true);
  return (
    <View className="p-5">
      {showInstrucciones ? (
        <View className="flex">
          <Text className="font-bold text-2xl text-center mb-5">
            Exámen de los temas
          </Text>
          <Text className="text-lg mt-5">
            A continuación se presentarán algunas preguntas relacionadas con el
            cálculo de distancias y tiempos. Se proporcionará una explicación
            detallada del procedimiento del problema, seguida de una lista de
            posibles soluciones. Una vez que el problema se haya completado, se
            mostrará la respuesta correcta junto con una explicación.
          </Text>
          <TouchableOpacity
            className="bg-blue-500 rounded-lg py-4 px-5 mt-10"
            onPress={() => setShowInstrucciones(false)}
          >
            <Text className="text-white text-center">Comenzar</Text>
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://es.symbolab.com/public/images/notebook_illustration.png",
            }}
            className="w-full h-28 mt-12"
          />
        </View>
      ) : (
        <ExamenCard />
      )}
    </View>
  );
};

export default ExamenScreen;
