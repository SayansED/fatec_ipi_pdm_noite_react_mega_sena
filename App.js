import React, { useState } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default function App() {
  let [numeros, setNumeros] = useState([]);
 const gerarNumerosMegaSena = () => {
   // Array vazio
   numeros = []; 
   while(numeros.length != 6) {
     // Adcionando elementos gerados aleatoriamentes
     numeros.push(Math.floor(Math.random() * 60) + 1);
     // Aciona função callback e retorna true de acordo com a condição 
     numeros = numeros.filter((item, index) => {
       return numeros.indexOf(item) === index;
     });
   }
   // Adciona os numeros no array
   setNumeros([numeros]);
 }

  return (
    <View style={styles.container}>
        <Text style={styles.tituloText}>MEGA SENA</Text>
        <Button 
          title="JOGAR"
          onPress={gerarNumerosMegaSena}
        />
        <View style={styles.box}>
          <fieldset>
            <legend>Jogos gerados</legend>
              <Text style={styles.subTituloText}> {numeros.map(numero => `${numero}`)}</Text>
          </fieldset>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25
  },
  tituloText: {
    marginBottom: 15, 
    fontSize: 20, 
  },
  subTituloText: {
    marginTop: 15, 
    fontSize: 20, 
  },
  box: {
  marginTop: 25
  }
});