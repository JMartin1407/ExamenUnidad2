import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [datos,setDatos]=useState([
    { key: "Materia 1", },
    { key: "Materia 2", },
    { key: "Materia 3", },
    { key: "Materia 4", },
    { key: "Materia 5", },
    
  ])
  const [datos2,setDatos2]=useState([
    { key: "Materia 1", },
    { key: "Materia 2", },
    { key: "Materia 3", },
    { key: "Materia 4", },
    { key: "Materia 5", },

  ])
  return (
    <View style={styles.container}>
    <Text style={styles.topbar}>{"Materias existentes"}</Text>

    <FlatList
      data={datos}
      renderItem={({ item }) => (
        <Materias nombre={item.key} color={item.color} />
      )} 
    />
    <FlatList
      data={datos2}
      renderItem={({ item }) => (
        <Materias nombre={item.key} color={item.color} />
      )} 
    />
    

    <TextInput
      style={styles.Caja}
      onChangeText={(newText) => (materiaBuscada = newText)}
      placeholder={"Buscar una materia"}
    />
    <Button
      onPress={() => {
        for (let index = 0; index < datos.length; index++) {
          if (datos[index].key === materiaBuscada) {
            console.log(datos[index].key);
            const datosnuevos = [...datos];
            datosnuevos[index].color = true;
            setDatos(datosnuevos);
          }
        }
        for (let index = 0; index < datos2.length; index++) {
          if (datos2[index].key === materiaBuscada) {
            console.log(datos2[index].key);
            const datosnuevos = [...datos];
            datosnuevos[index].color = true;
            setDatos2(datosnuevos);
          }
        }
      }}
      title={"Revisar materia"}
    />
    <StatusBar style="auto" />
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
