import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const countries = [
  { label: "Tiempo", value: "Tiempo" },
  { label: "Distancia", value: "Distancia" },
];

const tiempos = [
  { label: "Segundos", value: "Segundos" },
  { label: "Minutos", value: "Minutos" },
  { label: "Horas", value: "Horas" },
  { label: "Días", value: "Días" },
  { label: "Semanas", value: "Semanas" },
  { label: "Meses", value: "Meses" },
  { label: "Años", value: "Años" },
];

const distancias = [
  { label: "Milímetros", value: "Milímetros" },
  { label: "Centímetros", value: "Centímetros" },
  { label: "Metros", value: "Metros" },
  { label: "Kilómetros", value: "Kilómetros" },
  { label: "Pulgadas", value: "Pulgadas" },
  { label: "Pies", value: "Pies" },
  { label: "Yardas", value: "Yardas" },
  { label: "Millas", value: "Millas" },
];

const nada = [{ label: "Seleccione una unidad", value: "Nada" }];

const CalcScreen = () => {
  function handleCategoriaSelect(item) {
    item === "Tiempo" ? setData(tiempos) : setData(distancias);
    console.log(data);
  }

  const [data, setData] = React.useState(nada);

  const [unidad1, setUnidad1] = useState(nada);
  const [Valor1, setValor1] = useState("");

  const [unidad2, setUnidad2] = useState(nada);
  const [Valor2, setValor2] = useState("");

  const [icon, setIcon] = useState("arrow-collapse-down");

  function handleSwitch() {
    icon === "arrow-collapse-up"
      ? setIcon("arrow-collapse-down")
      : setIcon("arrow-collapse-up");
    const valor1 = Valor1;
    const valor2 = Valor2;
    setValor2(valor1);
    setValor1(valor2);

    const Unidad1 = unidad1;
    const Unidad2 = unidad2;
    setUnidad2(Unidad1);
    setUnidad1(Unidad2);
  }

  function convertir() {
    Keyboard.dismiss();
    if (unidad1 === "Segundos" && unidad2 === "Minutos") {
      const resultado = Valor1 / 60;
      setValor2(resultado);
    } else if (unidad1 === "Segundos" && unidad2 === "Horas") {
      const resultado = Valor1 / 3600;
      setValor2(resultado);
    } else if (unidad1 === "Segundos" && unidad2 === "Días") {
      const resultado = Valor1 / 86400;
      setValor2(resultado);
    } else if (unidad1 === "Segundos" && unidad2 === "Semanas") {
      const resultado = Valor1 / 604800;
      setValor2(resultado);
    } else if (unidad1 === "Segundos" && unidad2 === "Meses") {
      const resultado = Valor1 / 2628000;
      setValor2(resultado);
    } else if (unidad1 === "Segundos" && unidad2 === "Años") {
      const resultado = Valor1 / 31540000;
      setValor2(resultado);
    } else if (unidad1 === "Minutos" && unidad2 === "Segundos") {
      const resultado = Valor1 * 60;
      setValor2(resultado);
    } else if (unidad1 === "Minutos" && unidad2 === "Horas") {
      const resultado = Valor1 / 60;
      setValor2(resultado);
    } else if (unidad1 === "Minutos" && unidad2 === "Días") {
      const resultado = Valor1 / 1440;
      setValor2(resultado);
    } else if (unidad1 === "Minutos" && unidad2 === "Semanas") {
      const resultado = Valor1 / 10080;
      setValor2(resultado);
    } else if (unidad1 === "Minutos" && unidad2 === "Meses") {
      const resultado = Valor1 / 43800;
      setValor2(resultado);
    } else if (unidad1 === "Minutos" && unidad2 === "Años") {
      const resultado = Valor1 / 525600;
      setValor2(resultado);
    } else if (unidad1 === "Horas" && unidad2 === "Segundos") {
      const resultado = Valor1 * 3600;
      setValor2(resultado);
    } else if (unidad1 === "Horas" && unidad2 === "Minutos") {
      const resultado = Valor1 * 60;
      setValor2(resultado);
    } else if (unidad1 === "Horas" && unidad2 === "Días") {
      const resultado = Valor1 / 24;
      setValor2(resultado);
    } else if (unidad1 === "Horas" && unidad2 === "Semanas") {
      const resultado = Valor1 / 168;
      setValor2(resultado);
    } else if (unidad1 === "Horas" && unidad2 === "Meses") {
      const resultado = Valor1 / 730;
      setValor2(resultado);
    } else if (unidad1 === "Horas" && unidad2 === "Años") {
      const resultado = Valor1 / 8760;
      setValor2(resultado);
    } else if (unidad1 === "Días" && unidad2 === "Segundos") {
      const resultado = Valor1 * 86400;
      setValor2(resultado);
    } else if (unidad1 === "Días" && unidad2 === "Minutos") {
      const resultado = Valor1 * 1440;
      setValor2(resultado);
    } else if (unidad1 === "Días" && unidad2 === "Horas") {
      const resultado = Valor1 * 24;
      setValor2(resultado);
    } else if (unidad1 === "Días" && unidad2 === "Semanas") {
      const resultado = Valor1 / 7;
      setValor2(resultado);
    } else if (unidad1 === "Días" && unidad2 === "Meses") {
      const resultado = Valor1 / 30.417;
      setValor2(resultado);
    } else if (unidad1 === "Días" && unidad2 === "Años") {
      const resultado = Valor1 / 365;
      setValor2(resultado);
    } else if (unidad1 === "Semanas" && unidad2 === "Segundos") {
      const resultado = Valor1 * 604800;
      setValor2(resultado);
    } else if (unidad1 === "Semanas" && unidad2 === "Minutos") {
      const resultado = Valor1 * 10080;
      setValor2(resultado);
    } else if (unidad1 === "Semanas" && unidad2 === "Horas") {
      const resultado = Valor1 * 168;
      setValor2(resultado);
    } else if (unidad1 === "Semanas" && unidad2 === "Días") {
      const resultado = Valor1 * 7;
      setValor2(resultado);
    } else if (unidad1 === "Semanas" && unidad2 === "Meses") {
      const resultado = Valor1 / 4.345;
      setValor2(resultado);
    } else if (unidad1 === "Semanas" && unidad2 === "Años") {
      const resultado = Valor1 / 52.143;
      setValor2(resultado);
    } else if (unidad1 === "Meses" && unidad2 === "Segundos") {
      const resultado = Valor1 * 2628000;
      setValor2(resultado);
    } else if (unidad1 === "Meses" && unidad2 === "Minutos") {
      const resultado = Valor1 * 43800;
      setValor2(resultado);
    } else if (unidad1 === "Meses" && unidad2 === "Horas") {
      const resultado = Valor1 * 730;
      setValor2(resultado);
    } else if (unidad1 === "Meses" && unidad2 === "Días") {
      const resultado = Valor1 * 30.417;
      setValor2(resultado);
    } else if (unidad1 === "Meses" && unidad2 === "Semanas") {
      const resultado = Valor1 * 4.345;
      setValor2(resultado);
    } else if (unidad1 === "Meses" && unidad2 === "Años") {
      const resultado = Valor1 / 12;
      setValor2(resultado);
    } else if (unidad1 === "Años" && unidad2 === "Segundos") {
      const resultado = Valor1 * 31540000;
      setValor2(resultado);
    } else if (unidad1 === "Años" && unidad2 === "Minutos") {
      const resultado = Valor1 * 525600;
      setValor2(resultado);
    } else if (unidad1 === "Años" && unidad2 === "Horas") {
      const resultado = Valor1 * 8760;
      setValor2(resultado);
    } else if (unidad1 === "Años" && unidad2 === "Días") {
      const resultado = Valor1 * 365;
      setValor2(resultado);
    } else if (unidad1 === "Años" && unidad2 === "Semanas") {
      const resultado = Valor1 * 52.143;
      setValor2(resultado);
    } else if (unidad1 === "Años" && unidad2 === "Meses") {
      const resultado = Valor1 * 12;
      setValor2(resultado);
    } else if (unidad1 === "Milímetros" && unidad2 === "Centímetros") {
      const resultado = Valor1 / 10;
      setValor2(resultado);
    } else if (unidad1 === "Milímetros" && unidad2 === "Metros") {
      const resultado = Valor1 / 1000;
      setValor2(resultado);
    } else if (unidad1 === "Milímetros" && unidad2 === "Kilómetros") {
      const resultado = Valor1 / 1000000;
      setValor2(resultado);
    } else if (unidad1 === "Milímetros" && unidad2 === "Pulgadas") {
      const resultado = Valor1 / 25.4;
      setValor2(resultado);
    } else if (unidad1 === "Milímetros" && unidad2 === "Pies") {
      const resultado = Valor1 / 304.8;
      setValor2(resultado);
    } else if (unidad1 === "Milímetros" && unidad2 === "Yardas") {
      const resultado = Valor1 / 914.4;
      setValor2(resultado);
    } else if (unidad1 === "Milímetros" && unidad2 === "Millas") {
      const resultado = Valor1 / 1609344;
      setValor2(resultado);
    } else if (unidad1 === "Centímetros" && unidad2 === "Milímetros") {
      const resultado = Valor1 * 10;
      setValor2(resultado);
    } else if (unidad1 === "Centímetros" && unidad2 === "Metros") {
      const resultado = Valor1 / 100;
      setValor2(resultado);
    } else if (unidad1 === "Centímetros" && unidad2 === "Kilómetros") {
      const resultado = Valor1 / 100000;
      setValor2(resultado);
    } else if (unidad1 === "Centímetros" && unidad2 === "Pulgadas") {
      const resultado = Valor1 / 2.54;
      setValor2(resultado);
    } else if (unidad1 === "Centímetros" && unidad2 === "Pies") {
      const resultado = Valor1 / 30.48;
      setValor2(resultado);
    } else if (unidad1 === "Centímetros" && unidad2 === "Yardas") {
      const resultado = Valor1 / 91.44;
      setValor2(resultado);
    } else if (unidad1 === "Centímetros" && unidad2 === "Millas") {
      const resultado = Valor1 / 160934.4;
      setValor2(resultado);
    } else if (unidad1 === "Metros" && unidad2 === "Milímetros") {
      const resultado = Valor1 * 1000;
      setValor2(resultado);
    } else if (unidad1 === "Metros" && unidad2 === "Centímetros") {
      const resultado = Valor1 * 100;
      setValor2(resultado);
    } else if (unidad1 === "Metros" && unidad2 === "Kilómetros") {
      const resultado = Valor1 / 1000;
      setValor2(resultado);
    } else if (unidad1 === "Metros" && unidad2 === "Pulgadas") {
      const resultado = Valor1 * 39.37;
      setValor2(resultado);
    } else if (unidad1 === "Metros" && unidad2 === "Pies") {
      const resultado = Valor1 * 3.281;
      setValor2(resultado);
    } else if (unidad1 === "Metros" && unidad2 === "Yardas") {
      const resultado = Valor1 * 1.094;
      setValor2(resultado);
    } else if (unidad1 === "Metros" && unidad2 === "Millas") {
      const resultado = Valor1 / 1609.344;
      setValor2(resultado);
    } else if (unidad1 === "Kilómetros" && unidad2 === "Milímetros") {
      const resultado = Valor1 * 1000000;
      setValor2(resultado);
    } else if (unidad1 === "Kilómetros" && unidad2 === "Centímetros") {
      const resultado = Valor1 * 100000;
      setValor2(resultado);
    } else if (unidad1 === "Kilómetros" && unidad2 === "Metros") {
      const resultado = Valor1 * 1000;
      setValor2(resultado);
    } else if (unidad1 === "Kilómetros" && unidad2 === "Pulgadas") {
      const resultado = Valor1 * 39370.079;
      setValor2(resultado);
    } else if (unidad1 === "Kilómetros" && unidad2 === "Pies") {
      const resultado = Valor1 * 3280.84;
      setValor2(resultado);
    } else if (unidad1 === "Kilómetros" && unidad2 === "Yardas") {
      const resultado = Valor1 * 1093.613;
      setValor2(resultado);
    } else if (unidad1 === "Kilómetros" && unidad2 === "Millas") {
      const resultado = Valor1 / 1.609;
      setValor2(resultado);
    } else if (unidad1 === "Pulgadas" && unidad2 === "Milímetros") {
      const resultado = Valor1 * 25.4;
      setValor2(resultado);
    } else if (unidad1 === "Pulgadas" && unidad2 === "Centímetros") {
      const resultado = Valor1 * 2.54;
      setValor2(resultado);
    } else if (unidad1 === "Pulgadas" && unidad2 === "Metros") {
      const resultado = Valor1 / 39.37;
      setValor2(resultado);
    } else if (unidad1 === "Pulgadas" && unidad2 === "Kilómetros") {
      const resultado = Valor1 / 39370.079;
      setValor2(resultado);
    } else if (unidad1 === "Pulgadas" && unidad2 === "Pies") {
      const resultado = Valor1 / 12;
      setValor2(resultado);
    } else if (unidad1 === "Pulgadas" && unidad2 === "Yardas") {
      const resultado = Valor1 / 36;
      setValor2(resultado);
    } else if (unidad1 === "Pulgadas" && unidad2 === "Millas") {
      const resultado = Valor1 / 63360;
      setValor2(resultado);
    } else if (unidad1 === "Pies" && unidad2 === "Milímetros") {
      const resultado = Valor1 * 304.8;
      setValor2(resultado);
    } else if (unidad1 === "Pies" && unidad2 === "Centímetros") {
      const resultado = Valor1 * 30.48;
      setValor2(resultado);
    } else if (unidad1 === "Pies" && unidad2 === "Metros") {
      const resultado = Valor1 / 3.281;
      setValor2(resultado);
    } else if (unidad1 === "Pies" && unidad2 === "Kilómetros") {
      const resultado = Valor1 / 3280.84;
      setValor2(resultado);
    } else if (unidad1 === "Pies" && unidad2 === "Pulgadas") {
      const resultado = Valor1 * 12;
      setValor2(resultado);
    } else if (unidad1 === "Pies" && unidad2 === "Yardas") {
      const resultado = Valor1 / 3;
      setValor2(resultado);
    } else if (unidad1 === "Pies" && unidad2 === "Millas") {
      const resultado = Valor1 / 5280;
      setValor2(resultado);
    } else if (unidad1 === "Yardas" && unidad2 === "Milímetros") {
      const resultado = Valor1 * 914.4;
      setValor2(resultado);
    } else if (unidad1 === "Yardas" && unidad2 === "Centímetros") {
      const resultado = Valor1 * 91.44;
      setValor2(resultado);
    } else if (unidad1 === "Yardas" && unidad2 === "Metros") {
      const resultado = Valor1 / 1.094;
      setValor2(resultado);
    } else if (unidad1 === "Yardas" && unidad2 === "Kilómetros") {
      const resultado = Valor1 / 1093.613;
      setValor2(resultado);
    } else if (unidad1 === "Yardas" && unidad2 === "Pulgadas") {
      const resultado = Valor1 * 36;
      setValor2(resultado);
    } else if (unidad1 === "Yardas" && unidad2 === "Pies") {
      const resultado = Valor1 * 3;
      setValor2(resultado);
    } else if (unidad1 === "Yardas" && unidad2 === "Millas") {
      const resultado = Valor1 / 1760;
      setValor2(resultado);
    } else if (unidad1 === "Millas" && unidad2 === "Milímetros") {
      const resultado = Valor1 * 1609344;
      setValor2(resultado);
    } else if (unidad1 === "Millas" && unidad2 === "Centímetros") {
      const resultado = Valor1 * 160934.4;
      setValor2(resultado);
    } else if (unidad1 === "Millas" && unidad2 === "Metros") {
      const resultado = Valor1 * 1609.344;
      setValor2(resultado);
    } else if (unidad1 === "Millas" && unidad2 === "Kilómetros") {
      const resultado = Valor1 * 1.609;
      setValor2(resultado);
    } else if (unidad1 === "Millas" && unidad2 === "Pulgadas") {
      const resultado = Valor1 * 63360;
      setValor2(resultado);
    } else if (unidad1 === "Millas" && unidad2 === "Pies") {
      const resultado = Valor1 * 5280;
      setValor2(resultado);
    } else if (unidad1 === "Millas" && unidad2 === "Yardas") {
      const resultado = Valor1 * 1760;
      setValor2(resultado);
    }
    console.log(Valor2);
  }

  return (
    <View>
      <View className="flex justify-center p-5">
        <Text className="mt-5 mb-1">Seleccione una unidad para convertir</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={countries}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Seleccionar"
          onChange={(item) => {
            handleCategoriaSelect(item.value);
          }}
        />
        <View className="mt-8">
          <Text className="mt-5">Ingrese las unidades</Text>
          <View className="flex-row items-center">
            <Dropdown
              style={styles.dropdown2}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Seleccionar"
              value={unidad1}
              onChange={(item) => {
                setUnidad1(item.value);
              }}
            />
            <TextInput
              mode="outlined"
              label="Unidad"
              value={Valor1.toString()}
              onChangeText={(text) => setValor1(text)}
              className="w-1/2"
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <TouchableWithoutFeedback onPress={handleSwitch}>
            <Text className="text-black/60 dark:text-white/70 ml-16">
              <MaterialCommunityIcons name={icon} size={20} />
            </Text>
          </TouchableWithoutFeedback>

          <View className="flex-row items-center">
            <Dropdown
              style={styles.dropdown2}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Seleccionar"
              value={unidad2}
              onChange={(item) => {
                setUnidad2(item.value);
              }}
            />
            <View className="flex ml-5">
              <Text>Valor: </Text>
              <Text>{Valor2}</Text>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={convertir}>
            <View className="bg-blue-500 rounded-lg py-3 px-5 mt-12">
              <Text className="text-white text-center">Convertir</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default CalcScreen;

const styles = StyleSheet.create({
  dropdown: {
    width: 320,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    color: "white",
  },
  dropdown2: {
    width: 150,
    height: 50,
    marginTop: 5,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    color: "white",
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 15,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 15,
    color: "black",
  },
  selectedStyle: {
    borderRadius: 12,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
