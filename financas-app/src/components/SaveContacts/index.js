import React from "react";
import { Text,TouchableOpacity } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function SaveContacts({data}){
  
  const navigation = useNavigation();

    return(
        <TouchableOpacity 
        style={styles.buttonBanco}
        onPress={ () => navigation.navigate('PaymentInfo')}
        >
          <AntDesign style={styles.iconButtonbanco} name="bank" size={23}/>
          <Text style={styles.txtButtonBanco}>{data.nome_banco}</Text>
          <Feather style={styles.iconButtonArrow} name="arrow-right" size={15} />
        </TouchableOpacity>
    );
}
