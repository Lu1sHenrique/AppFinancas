import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Foundation, Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

export default function Actions({ }) {

    const navigation = useNavigation();

    return (
        <ScrollView
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigation.navigate('SelectPaymentAccount')}
            >
                <View style={styles.areaButton}>
                    <Foundation name="dollar-bill" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>
                    Realizar
                </Text>
                <Text style={styles.labelButton}>
                    pagamento
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="copy1" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>
                    Extrato
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigation.navigate('Profile')}
            >
                <View style={styles.areaButton}>
                    <AntDesign name="user" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.actionButton}
            >
                <View style={styles.areaButton}>
                    <Feather name="shopping-bag" size={35} color="#000" />
                </View>
                <Text style={styles.labelButton}>Benefícios</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}