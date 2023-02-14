import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import {Picker, useRef} from '@react-native-picker/picker';



export default function App() {
  const [rahamaara, setRahamaara] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [result, setResult] = useState('');
  const [currency, setCurrency] = useState();
  const [euro, getEuro]= useState();

 // const data = [];
  //console.log(Object.keys(data));

var myHeaders = new Headers();
  myHeaders.append("apikey", "nlj3caeCrb6EWQwSiMzPKHEzbrEF3kfk");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
 
fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
  .then(response => response.json())
  .then(data => setCurrency(data))
  .catch(error =>{ Alert.alert('Error', error);
 });
 
  //const getEuro = () =>{
   
  //}
  const valuutta = {
    rates:'',
  };

  console.log(Object.keys(valuutta));

  return (
    <View style={styles.container}>
      <Text>{result} €</Text>
      <TextInput style={{textDecorationLine: 'underline'}}
      placeholder="amount"
      keyboardType="numeric"
      value={rahamaara}
      //onChangeText {  } 
      > </TextInput>
      <Picker     
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedValue(itemValue)
        }>
        <Picker.Item label="Valuutta" value="valuutta" />
      </Picker>
      
      <Button title="CONVERT" onPress= {getEuro} />
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
