import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';

import styles from './styles';


export default function PaymentInfo({ }) {


    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.buttonBack}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerTitle}>
                <Text style={styles.title}>Qual é o valor da transferência?</Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.txtInputValue}>R$ </Text>
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
                    <Ionicons name="chevron-forward" size={65} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>

    );
}
