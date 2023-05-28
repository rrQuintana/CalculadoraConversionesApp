import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";

const DatosScreen = () => {
  const datosTiempo = [
    {
      categoria: "tiempo",
      titulo: "La unidad de tiempo más pequeña en informática",
      descripcion:
        "Un nanosegundo equivale a una milmillonésima parte de un segundo. Es fundamental para medir tiempos en sistemas informáticos de alta velocidad.",
    },
    {
      categoria: "tiempo",
      titulo: "'Hace un santiamén'",
      descripcion:
        "Esta expresión proviene del latín y se utilizaba para medir el tiempo que duraba una oración. Actualmente, se utiliza para referirse a algo que sucede en un instante.",
    },
    {
      categoria: "tiempo",
      titulo: "Tiempo de reacción humano",
      descripcion:
        "El tiempo promedio de reacción a un estímulo visual es de aproximadamente 250 milisegundos. Es el tiempo que tardamos en procesar y responder a la información visual recibida.",
    },
    {
      categoria: "tiempo",
      titulo: "Un día en Venus es más largo que un año",
      descripcion:
        "Un día venusiano equivale a 243 días terrestres, mientras que un año venusiano equivale a aproximadamente 225 días terrestres.",
    },
    {
      categoria: "tiempo",
      titulo: "El reloj atómico más preciso",
      descripcion:
        "El reloj atómico más preciso desarrollado hasta la fecha tiene una precisión de un segundo en 33 mil millones de años. Es una muestra asombrosa de la tecnología para medir el tiempo con extrema precisión.",
    },
    {
      categoria: "tiempo",
      titulo: "Ajuste de un segundo en el tiempo coordinado universal (UTC)",
      descripcion:
        "En 1972, se ajustó en un segundo el tiempo coordinado universal (UTC) para tener en cuenta la desaceleración de la rotación de la Tierra debido a la Luna. Esto demuestra cómo los avances científicos están constantemente ajustando nuestra forma de medir el tiempo.",
    },
    {
      categoria: "tiempo",
      titulo: "El origen de 'cronómetro'",
      descripcion:
        "La palabra 'cronómetro' proviene del griego 'chronos' (tiempo) y 'metron' (medida). Se refiere a un instrumento preciso para medir el tiempo.",
    },
  ];

  const datosDistancia = [
    {
      categoria: "distancia",
      titulo: "El rayo de luz",
      descripcion:
        "La velocidad de la luz es de aproximadamente 299,792 kilómetros por segundo en el vacío. Es la velocidad máxima conocida en el universo y es utilizada como referencia en muchas disciplinas científicas.",
    },
    {
      categoria: "distancia",
      titulo: "La distancia promedio entre la Tierra y la Luna",
      descripcion:
        "La distancia promedio entre la Tierra y la Luna es de aproximadamente 384,400 kilómetros. Esta medida se utiliza como referencia para comprender la escala del espacio y los viajes espaciales.",
    },
    {
      categoria: "distancia",
      titulo:
        "El diámetro del sistema solar",
      descripcion:
        "El diámetro del sistema solar se extiende desde el Sol hasta los límites exteriores de la Nube de Oort, una región que contiene cometas. Esta medida ayuda a comprender la vasta extensión del sistema solar.",
    },
    {
      categoria: "distancia",
      titulo:
        "El diámetro del universo",
      descripcion:
        "El universo observable tiene un diámetro de aproximadamente 93 mil millones de años luz. Esta medida representa la distancia que la luz ha recorrido desde el Big Bang hasta nosotros y nos ayuda a comprender la inmensidad del universo.",
    },
    {
      categoria: "distancia",
      titulo:
        "El Ancho de un cabello humano",
      descripcion:
        "El ancho promedio de un cabello humano es de aproximadamente 0.1 milímetros. Esta medida nos ayuda a comprender distancias muy pequeñas y es utilizada en diversas aplicaciones científicas y tecnológicas.",
    },
  ];

  const datos = [...datosDistancia, ...datosTiempo];

  const Categorias = ["Todo", "tiempo", "distancia"];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = React.useState(0);

  const handleCategoriaSeleccionada = (index) => {
    setCategoriaSeleccionada(index);
  };

  return (
    <View className="p-5">
      <Text className="font-semibold text-lg mb-5">
        Datos curiosos sobre tiempo y distancia
      </Text>
      <View className="flex-row gap-4 items-center justify-center">
        {Categorias.map((categoria, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoriaSeleccionada(index)}
            className={`${
              categoriaSeleccionada === index
                ? "bg-blue-300 text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-full`}
          >
            <Text className="font-semibold">{categoria}</Text>
          </TouchableOpacity>
        ))}
      </View>      
      <View className="mt-5">
        <ScrollView className="h-96">
          {datos
            .filter((dato) => {
              if (categoriaSeleccionada === 0) {
                return true;
              } else {
                return dato.categoria === Categorias[categoriaSeleccionada];
              }
            })
            .map((dato, index) => (
              <View
                key={index}
                className="bg-gray-200 rounded-lg p-5 mb-5 flex-row"
              >
                <View className="flex-1">
                  <Text className="text-lg font-semibold">{dato.titulo}</Text>
                  <Text className="text-sm">{dato.descripcion}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
      <Image
          source={require("../assets/img/practice-image-1.png")}
          className="w-full h-28 mt-5"
        />
    </View>
  );
};

export default DatosScreen;
