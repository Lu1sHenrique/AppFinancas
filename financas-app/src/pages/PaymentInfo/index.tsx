import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';

import styles from './styles';
import ButtonBack from "../../components/Utils/buttonBack";

export default function PaymentInfo({ }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <ButtonBack />

            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    Qual é o valor da transferência?
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.txtInputValue}>
                    R$
                </Text>
                <TextInput
                    style={styles.inputValue}
                    keyboardType='numeric'
                    placeholder="0,00"
                >
                </TextInput>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.butonContinuar}
                    onPress={() => navigation.navigate('SelectKeyPayment')}>
                    <Ionicons 
                        size={65} 
                        name="chevron-forward" 
                        color='#fff' />
                </TouchableOpacity>
            </View>
        </View>

    );
}
