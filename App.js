import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, BackHandler, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { StatusBar } from 'expo-status-bar';
import User from 'react-native-vector-icons/FontAwesome';
User.loadFont()


export default function Aplicativo() {

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 20,fontWeight: 'bold', color:"#e30000"}}>{"\n"}CALCULADORA DE IMC</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <Text style={{ fontSize: 20,fontWeight:'bold', color:"#FAFAFA"}}> Qual o seu peso?</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <TextInput style={{ fontSize: 15,color:"#FAFAFA"}}> Digite aqui </TextInput>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <Text style={{ fontSize: 20,fontWeight:'bold', color:"#FAFAFA"}}> Qual sua altura?</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <TextInput style={{ fontSize: 15,color:"#FAFAFA"}}> Digite aqui </TextInput>
            <CheckBox checar = {false} style={styles.container}
            onPress={() => this.umPressionado()}
            />
            <Text style={{ fontSize:15,fontWeight:'bold', color:"#09f04d"}}>Criança</Text>
            <CheckBox checar= {false}
            onPress={() => this.doisPressionado()}
            />
            <Text style={{ fontSize:15,fontWeight:'bold', color:"#0924f0"}}>Adulto</Text>
           <CheckBox checar= {false}
           onPress={() => this.tresPressionado()}
           />
           <Text style={{ fontSize:15,fontWeight:'bold', color:"#f08d09"}}>Idoso</Text>
           <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('calcular o peso')}>
              <User name="user" size={20} color="purple"></User>
              <Text style={{ fontSize: 15,fontWeight: 'bold'}}>Calcular</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold',color:"gray"}}>----------------</Text>
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

