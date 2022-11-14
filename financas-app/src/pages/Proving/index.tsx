import React, { useState } from 'react';
import { Text, View } from 'react-native';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import ButtonBack from '../../components/Utils/buttonBack';

import styles from './styles';

export default function Proving() {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [animat, setAnimat] = useState(true);

    function handleSendMoney() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
        console.log('funfo');
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <ButtonBack
                iconName='chevron-back' />

            <LottieView
                source={require("../../assets/animation_transfer.json")}
                autoPlay={true}
                duration={5000}
                style={{ marginBottom: 130 }}
            />

            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    Tranferência
                </Text>
                <Text style={styles.value}>
                    realizada!
                </Text>
            </View>

            <Button
                disabled={!loading}
                variant='outline'
                title=' Comprovante'
                onPress={handleSendMoney}
                style={{ marginLeft: 20, marginBottom: 40 }} />

            <Button
                disabled={loading}
                variant='outline'
                title='Voltar ao Início'
                onPress={handleSendMoney}
                style={{ marginLeft: 20, marginBottom: 40 }} />

        </View>
    )
}