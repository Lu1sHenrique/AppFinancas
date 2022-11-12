import React from 'react';
import { Text, View } from 'react-native';
import LottieView from "lottie-react-native";

import ButtonBack from '../../components/Utils/buttonBack';

import styles from './styles';

export default function StatusSend() {

    return (
        <View style={styles.container}>

            <ButtonBack
                iconName='chevron-back' />

            <LottieView
                autoPlay
                source={require("../../assets/ok.json")}
                duration={5000}
                style={{ marginBottom: 130 }}
            />

            <View style={styles.containerTitle}>
                <Text style={styles.value}>
                    Banco Atualizado!
                </Text>
            </View>
        </View>
    )
}