import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function DataBank() {
    return (
        <View style={styles.avatar}>
            <View style={styles.dateBank}>
                <View style={styles.bank1}>
                    <Text style={styles.bank}>
                        Banco:
                    </Text>
                    <Text style={styles.date}>
                        323
                    </Text>
                </View>
                <View style={styles.bank1}>
                    <Text style={styles.bank}>
                        Agência:
                    </Text>
                    <Text style={styles.date}>
                        0001
                    </Text>
                </View>
                <View style={styles.bank1}>
                    <Text style={styles.bank}>
                        Conta corrente:
                    </Text>
                    <Text style={styles.date}>
                        398322-9
                    </Text>
                </View>
            </View>
        </View>
    );
}