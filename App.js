import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, BackHandler, TextInput} from 'react-native';
/* import CheckBox from '@react-native-community/checkbox'; */
import { Picker } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Certo from 'react-native-vector-icons/FontAwesome';
import Alt from 'react-native-vector-icons/FontAwesome';
import Kilo from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Aplicativo() {
  const [peso,setPeso] = React.useState(0.00);
  const [altura,setAltura] = React.useState(0.00);
  const [imc,setImc] = React.useState(0.00);
  const [linguagem,setLinguagem] = React.useState('js');

  function calculaImc(peso,altura){
    var resultado = peso / (altura * altura)
    setImc(resultado)
    console.log('valor do imc:',imc)
    console.log('valor de altura',altura)
    console.log('valor de peso',peso)

    if (resultado < 18.5) {
      alert("Baixo Peso" + resultado.toFixed(2))
    }
    else if (resultado >=18.5 && resultado<24.9) {
      alert("Peso saudável" + resultado.toFixed(2))
    }
    else if (resultado >=25 && resultado<29.9) {
      alert("Sobrepeso" + resultado.toFixed(2))
    }
    else if (resultado >= 30) {
      alert("Obesidade" + resultado.toFixed(2))
    }
  }
    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 20,fontWeight: 'bold', color:"#e30000"}}>{"\n"}CALCULADORA DE IMC</Text>

            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>

            <Kilo name="weight-kilogram" size={30} color="black"></Kilo>

            <Text style={{ fontSize: 20,fontWeight:'bold', color:"#FAFAFA"}}>Qual o seu peso?</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>

            <TextInput style={{ fontSize: 15,color:"#FAFAFA"}}
            placeholder="Digite aqui"
            onChangeText={valor => setPeso(valor)}
            value={peso} 
            ></TextInput>

            
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>

            <Alt name="expand" size={30} color="black"></Alt>

            <Text style={{ fontSize: 20,fontWeight:'bold', color:"#FAFAFA"}}> Qual sua altura?</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>

            <TextInput style={{ fontSize: 15,color:"#FAFAFA"}}
            placeholder="Digite aqui"
            onChangeText={(valor) => setAltura(valor)}
            value={altura} 
            ></TextInput>
            
            
           <Picker
           selectedValue={linguagem}
           style={{height: 50, width: 100}}
           onValueChange={(itemValue, itemIndex) =>
           setLinguagem(itemValue)
           }>
           <Picker.Item label="Criança" value="java" />
           <Picker.Item label="Adulto" value="a" />
          <Picker.Item label="Idoso" value="js" />   


          </Picker> 
          <TouchableOpacity style={styles.ident1} 
              onPress={() => calculaImc(peso,altura)}>
              <Certo name="check" size={20} color="lightgreen"></Certo>
              <Text style={{ fontSize: 15,fontWeight: 'bold'}}>Calcular</Text>
            </TouchableOpacity>
           <Text>{'\n'}</Text>
           <Text>Peso: {peso} Altura: {altura} IMC: {imc.toFixed(2)} </Text>

            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>-</Text>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: "column",
      paddingTop: 40,
    },
      views: {
        width: 300,
        height: 170,
        margin: 15,
        borderRadius: 6,
        alignItems: "center",
      },
    ident1: {
      backgroundColor:'#FAFAFA',
      shadowColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:40,
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowOffset: {width: 0, height: 2},
      elevation: 2,
      paddingTop: 9,
      width: 250,
      height: 75
    },
    ident2:{
      flex: 1,
      backgroundColor: '#fafafa',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: 150,
      width: 150,
      height: 50,
      borderRadius: 8,
    },  
    });

