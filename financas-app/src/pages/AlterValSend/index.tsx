import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, View } from 'react-native';

import { Button } from '../../components/Button';
import ButtonBack from '../../components/Utils/buttonBack';

import styles from './styles';

export default function AlterValSend() {
    
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    function handleSendMoney() {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
        console.log('funfo');
        navigation.navigate('ConfirmDate');
    }
    return (
        <>
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

            <Button
                disabled={loading}
                variant='outline'
                title='Atualizar'
                onPress={handleSendMoney}
                style={{ marginLeft: 20, marginBottom: 40 }}
            />
        </>
    )
}