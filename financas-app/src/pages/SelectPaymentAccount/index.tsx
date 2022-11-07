import React, { useRef } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import AccountsConecPayment from '../../components/AccountsConecPayment/index';

import styles from './styles';

const DATA = Array.from({ length: 50 }, (_i, _k) => `Banco ${_k}`);


export default function SelectPaymentAccount() {

    const myRef = useRef(null);
    const navigation = useNavigation();


    return (

        <FlatList
            style={styles.container}
            ListHeaderComponent={

                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <View style={styles.buttonBack}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                            >
                                <Ionicons name="chevron-back" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Selecione a conta que deseja utilizar para realizar o pagamento.</Text>
                    </View>

                    <FlatList
                        ref={myRef}
                        getItemLayout={(_data, index) => ({
                            length: DATA.length,
                            offset: DATA.length * index,
                            index,
                        })}
                        keyExtractor={(index) => index.toString()}
                        data={DATA}
                        renderItem={(itemData) => {
                            return (
                                <AccountsConecPayment 
                                    data={itemData.item} />
                            )
                        }}
                    />
                </View>
            }
        />
    );
}
