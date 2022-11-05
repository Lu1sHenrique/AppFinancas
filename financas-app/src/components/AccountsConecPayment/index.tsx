import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import colors from "../../styles/colors";

export default function AccountsConecPayment({ data }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonBanco}
      onPress={() => navigation.navigate('PaymentInfo')}>

      <FontAwesome
        size={23}
        name="bank"
        style={styles.iconButtonbanco} />

      <Text style={styles.txtButtonBanco}>
        {data}
      </Text>

      <Text style={styles.txtValue}>
        <Text
          style={{ color: colors.green, fontSize: 10 }}>
          R$
        </Text>
        500,00
      </Text>
    </TouchableOpacity>
  );
}
