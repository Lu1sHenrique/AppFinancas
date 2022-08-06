import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {AntDesign, Foundation} from '@expo/vector-icons'

export default function Actions() {
 return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}> 
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


const styles = StyleSheet.create({
    container: {
      maxHeight: 84,
      marginBottom: 14,
      marginTop: 18,
      paddingEnd: 14,
      paddingStart: 14
    },

    actionButton:{
        alignItems: 'center',
        marginRight: 32
    },

    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});