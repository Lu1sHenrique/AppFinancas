import React from "react";
import { Text,TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function AccountsConecPayment({data}){
  
  const navigation = useNavigation();

    return(
        <TouchableOpacity 
        style={styles.buttonBanco}
        onPress={ () => navigation.navigate('PaymentInfo')}
        >
          <FontAwesome style={styles.iconButtonbanco} name="bank" size={23}/>
          <Text style={styles.txtButtonBanco}>{data.nome_banco}</Text>
          <Text style={styles.txtValue}><Text style={{color: '#808080', fontSize: 10}}>R$</Text> 500,00</Text>
        </TouchableOpacity>
    );
}
