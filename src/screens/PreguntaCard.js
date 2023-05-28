import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import preguntas from "./PreguntasTiempo";
import { useNavigation } from "@react-navigation/native";

const PreguntaCard = () => {
  const navigation = useNavigation();
  const numeroPreguntas = preguntas.length;
  const [pregunta, setPregunta] = useState(1);

  function checkAnswer(resputesta, pista) {
    if (resputesta === "correcta") {
      Alert.alert("Correcto", "¡Muy bien!");
    } else {
      Alert.alert("Incorrecto", "Recuerda que: " + pista);
    }
  }

  return (
    <View>
      {
        // Si la pregunta es la última, mostrar el resultado
        pregunta === numeroPreguntas ? (
          <View>
            <Text className="text-xl text-center my-5">
              ¡Felicidades! Has terminado las preguntas.
            </Text>
            <TouchableOpacity
              className="bg-blue-500 rounded-lg py-3 px-5 mb-5"
              onPress={() => navigation.goBack()}
            >
              <Text className="text-white text-center">Regresar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-blue-500 rounded-lg py-3 px-5 mb-5"
              onPress={() => setPregunta(1)}
            >
              <Text className="text-white text-center">Volver a empezar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text>Pregunta {preguntas[pregunta - 1].index}.</Text>
            <Text className="font-medium mt-2 text-lg">
              {preguntas[pregunta - 1].pregunta}
            </Text>
            <Text>{preguntas[pregunta - 1].pista}</Text>
            <View className="flex flex-col mt-5">
              {preguntas[pregunta - 1].opciones.map((opcion) => (
                <TouchableOpacity
                  className="bg-blue-500 rounded-lg py-3 px-5 mb-3"
                  onPress={() =>
                    checkAnswer(opcion.tipo, preguntas[pregunta - 1].pista)
                  }
                  key={opcion.index}
                >
                  <Text className="text-white text-center">
                    {opcion.respuesta}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              className="bg-blue-500 rounded-lg py-3 px-5 mt-5"
              onPress={() => setPregunta(pregunta + 1)}
            >
              <Text className="text-white text-center">Siguiente</Text>
            </TouchableOpacity>
            <ScrollView horizontal={true} className="mt-8">
              <View className="flex-row ">
                <View className="flex mx-5 border-2 border-blue-500 rounded-md w-64 p-3">
                  <Text className="font-semibold text-lg">
                    Equivalencias básicas:
                  </Text>
                  <Text>
                    1 hora tiene 60 minutos. 1 minuto tiene 60 segundos. 1 día
                    tiene 24 horas. 1 semana tiene 7 días. 1 año tiene 365 días
                    (en un año no bisiesto).
                  </Text>
                </View>
                <View className="flex mx-5 border-2 border-blue-500 rounded-md w-64 p-3">
                  <Text className="font-semibold text-lg">
                    Establecer relaciones entre unidades:
                  </Text>
                  <Text>
                    Para convertir de una unidad de tiempo a otra, utiliza las
                    equivalencias mencionadas anteriormente. Por ejemplo, para
                    convertir minutos a segundos, multiplica la cantidad de
                    minutos por 60, ya que hay 60 segundos en un minuto.
                  </Text>
                </View>
                <View className="flex mx-5 border-2 border-blue-500 rounded-md w-64 p-3">
                  <Text className="font-semibold text-lg">
                    Realizar cálculos de conversión:
                  </Text>
                  <Text>
                    Si te piden convertir una cantidad de tiempo de una unidad a
                    otra, aplica la relación de conversión correspondiente. Por
                    ejemplo, si se te pide convertir 3 horas a minutos,
                    multiplica 3 por 60, ya que hay 60 minutos en una hora.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </>
        )
      }
    </View>
  );
};

export default PreguntaCard;
