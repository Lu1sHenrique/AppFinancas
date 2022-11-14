import React from 'react';
import { Text, View } from 'react-native';
import { MotiView } from 'moti';
import styles from './styles';


export default function Balance({ saldo, gastos }) {
    return (
        <MotiView
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1
            }}
            transition={{
                type: 'timing',
                duration: 900,
                delay: 300
            }}
        >
            <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Saldo
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimbol}>
                        R$
                    </Text>
                    <Text style={styles.balance}>
                        {saldo}
                    </Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Gastos
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimbol}>
                        R$
                    </Text>
                    <Text style={styles.expenses}>
                        {gastos}
                    </Text>
                </View>
            </View>
        </MotiView>
    );
}