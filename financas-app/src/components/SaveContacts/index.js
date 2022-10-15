import React from "react";
import { Text,TouchableOpacity, View } from 'react-native'
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
          <View style={styles.containerIconCliente}>
            <Text style={styles.txtIniciaisCliente}>JW</Text>
          </View>

          <View style={styles.containerTxtNomeCliente}>
            <Text style={styles.txtNomeCliente}>{data.nome}</Text>
          </View>
        </TouchableOpacity>
    );
}
