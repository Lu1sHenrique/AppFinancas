import React, { useRef, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, FlatList, TextInput } from 'react-native';

import styles from './styles';
import SaveContacts from '../../components/SaveContacts';
import ButtonBack from '../../components/Utils/buttonBack';
import MOCK_DATA from '../../../MOCK_DATA.json';


export default function SelectKeyPayment() {

    const [searchWord, setSearchWord] = useState('');

    return (
        <View style={styles.container}>

            <ButtonBack />

            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    Para quem você quer transferir
                    <Text style={styles.value}>
                        R$ 50,00
                    </Text>
                    ?
                </Text>
            </View>

            <View style={styles.search}>
                <View style={styles.lineInputIcon}>
                    <TextInput
                        placeholder='Insira os dados..'
                        style={styles.input}
                        onChangeText={setSearchWord}>
                    </TextInput>
                    <Feather
                        style={{ marginEnd: 20 }}
                        name='search' size={25} color="#808080" />
                </View>
            </View>

            <FlatList
                data={MOCK_DATA.filter(val => {
                    if (searchWord === '') {
                        return val
                    } else if (val.first_name.toLocaleLowerCase()
                        .includes(searchWord.toLocaleLowerCase())) {
                        return val
                    }
                }).map((item, index) =>
                    <Text key={index}>{item.first_name}</Text>
                )}
                renderItem={(itemData) =>
                    <SaveContacts
                        data={itemData.item} />
                } />
        </View>
    );
}