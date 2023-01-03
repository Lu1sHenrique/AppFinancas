import React, { useState } from "react";
import { AntDesign, Foundation, Feather } from '@expo/vector-icons';
import { Text, View, FlatList, TextInput } from 'react-native';

import styles from './styles';

import Actions from '../../components/Actions';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: "Boleto Conta Luz",
        value: "390,90",
        date: "17/05/2022",
        type: 0 //despesas 
    },
    {
        id: 2,
        label: "PIX Cliente X",
        value: "2.500,00",
        date: "20/05/2022",
        type: 1 //receita
    },
    {
        id: 3,
        label: "Salário",
        value: "7.500,00",
        date: "12/07/2022",
        type: 1 //receitas
    },
    {
        id: 4,
        label: "Gás",
        value: "112,00",
        date: "12/07/2022",
        type: 0 //despesas
    },
    {
        id: 5,
        label: "PIX Recebido",
        value: "800,00",
        date: "12/07/2022",
        type: 1 //receitas
    },
    {
        id: 6,
        label: "Academia",
        value: "120,00",
        date: "12/07/2022",
        type: 0 //despesas
    },
    {
        id: 7,
        label: "Boleto Sapato",
        value: "80,00",
        date: "12/07/2022",
        type: 0 //despesas
    }
]


export default function Home() {

    const [searchMov, setSearchMov] = useState('');

    return (
        <View style={styles.container}>

            <Header name="Luis Henrique" />

            <Balance saldo="9.250,90" gastos="-527,00" />

            <Actions />

            <View
                style={{ flex: 1 }}>
                <View style={{ marginVertical: 20 }}>
                    <View style={styles.lineInputIcon}>
                        <TextInput
                            placeholder='Buscar'
                            placeholderTextColor={"#808080"}
                            style={styles.input}
                            onChangeText={setSearchMov}>
                        </TextInput>
                        <Feather style={{ marginEnd: 20 }} name='search' size={25} color="#808080" />
                    </View>
                </View>

                <Text style={styles.title}>Últimas movimentações</Text>

                <FlatList
                style={styles.list}
                data={list.filter(val => {
                    if (searchMov === '') {
                        return val
                    } else if (val.label.toLocaleLowerCase()
                        .includes(searchMov.toLocaleLowerCase())) {
                        return val
                    }
                })}
                renderItem={(itemData) => <Movements data={itemData.item} />}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
