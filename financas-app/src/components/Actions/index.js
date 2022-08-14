import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {AntDesign, Foundation} from '@expo/vector-icons'
import styles from './styles'

export default function Actions() {
 return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity styles={styles.actionButton}> 
            <View style={styles.areaButton}>
                <Foundation name="dollar-bill" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButton}>Realizar</Text>
            <Text>pagamento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}> 
            <View style={styles.areaButton}>
                <AntDesign name="creditcard" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.actionButton}> 
            <View style={styles.areaButton}>
                <AntDesign name="barcode" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.actionButton}> 
            <View style={styles.areaButton}>
                <AntDesign name="user" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity> 
    </ScrollView>
  );
}