import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import preguntas from "./PreguntasDistancia";
import { useNavigation } from "@react-navigation/native";

const PreguntaCard2 = () => {
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
            <View className="flex flex-col mt-3">
              {preguntas[pregunta - 1].opciones.map((opcion) => (
                <TouchableOpacity
                  className="bg-blue-500 rounded-lg py-3 px-5 mb-1"
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
              className="bg-blue-500 rounded-lg py-3 px-5 mt-2"
              onPress={() => setPregunta(pregunta + 1)}
            >
              <Text className="text-white text-center">Siguiente</Text>
            </TouchableOpacity>
            <ScrollView horizontal={true} className="mt-8">
              <View className="flex-row ">
                <View className="flex mx-5 border-2 border-blue-500 rounded-md w-64 p-3">
                  <Text className="font-semibold text-lg">Fórmula básica:</Text>
                  <Text>
                    La fórmula básica para calcular la distancia es: Distancia =
                    Velocidad x Tiempo Esta fórmula te permite determinar la
                    distancia recorrida cuando conoces la velocidad a la que te
                    desplazas y el tiempo que tardas en hacerlo.
                  </Text>
                </View>
                <View className="flex mx-5 border-2 border-blue-500 rounded-md w-64 p-3">
                  <Text className="font-semibold text-lg">
                    Unidades de medida:
                  </Text>
                  <Text>
                    Asegúrate de utilizar las mismas unidades de medida tanto
                    para la velocidad como para el tiempo, de manera que sean
                    compatibles. Por ejemplo, si utilizas kilómetros por hora
                    (km/h) como unidad de velocidad, el tiempo debe estar en
                    horas.
                  </Text>
                </View>
                <View className="flex mx-5 border-2 border-blue-500 rounded-md w-64 p-3">
                  <Text className="font-semibold text-lg">
                    Conversión de unidades:
                  </Text>
                  <Text>
                    Si necesitas trabajar con diferentes unidades de medida,
                    asegúrate de convertirlas adecuadamente.
                  </Text>
                </View>
                <View className="flex mx-5 border-2 border-blue-500 rounded-md w-64 p-3">
                  <Text className="font-semibold text-lg">
                    Suma de distancias:
                  </Text>
                  <Text>
                    En situaciones donde se suman distancias, debes utilizar la
                    siguiente fórmula: Distancia Total = Distancia 1 + Distancia
                    2 + Distancia 3 + ... Esto se aplica cuando recorres
                    diferentes distancias en segmentos separados y quieres
                    obtener la distancia total recorrida.
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

export default PreguntaCard2;
