import React from "react";
import { Text,TouchableOpacity } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function SaveContacts({data}){
  
  const navigation = useNavigation();

    return(
        <TouchableOpacity 
        style={styles.buttonContact}
        onPress={ () => navigation.navigate('PaymentInfo')}
        >
          <Text style={styles.txtButtonBanco}>{data.nome_banco}</Text>
        </TouchableOpacity>
    );
}
