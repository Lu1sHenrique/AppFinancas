import React from "react";
import { Text,TouchableOpacity } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import styles from './styles'

export default function AccountsConec({data}){
  
    return(
        <TouchableOpacity style={styles.buttonBanco}>
          <AntDesign style={styles.iconButtonbanco} name="bank" size={23}/>
          <Text style={styles.txtButtonBanco}>{data.nome_banco}</Text>
          <Feather style={styles.iconButtonArrow} name="arrow-right" size={15} />
        </TouchableOpacity>
    );
}