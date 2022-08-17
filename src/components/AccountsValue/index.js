import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles'

export default function AccountsValue() {
 return (
   <View style={styles.container}>
    <View style={styles.txtName}>
      <Text style={styles.txt}>Luis Henrique</Text>
    </View>
    

    <View style={styles.containerValue}>
      <Text style={styles.txt}>Valor total: 1.500,00</Text>

      <Text style={styles.txt}>Valor total C/C: 500,00</Text>
    </View>   
   </View>
  );
}