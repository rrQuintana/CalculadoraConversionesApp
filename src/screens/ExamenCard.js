import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import preguntas from "./PreguntasExamen";
import { useNavigation } from "@react-navigation/native";

const ExamenCard = () => {
  const navigation = useNavigation();
  const numeroPreguntas = preguntas.length;
  const [pregunta, setPregunta] = useState(1);
  const [calificacion, setCalificacion] = useState(0);

  function checkAnswer(resputesta) {
    if (resputesta === "correcta") {
      setCalificacion(calificacion + 1);
    } 
    setPregunta(pregunta + 1)
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
            <Text className="text-xl text-center my-5">
              Tu calificación es: {calificacion}/{numeroPreguntas}
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
                  className="bg-blue-500 rounded-lg py-3 px-5 mb-5"
                  onPress={() => checkAnswer(opcion.tipo)}
                  key={opcion.index}
                >
                  <Text className="text-white text-center">
                    {opcion.respuesta}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )
      }
    </View>
  )
}

export default ExamenCard