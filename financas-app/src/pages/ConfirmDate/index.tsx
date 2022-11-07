import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Button } from '../../components/Button';
import { InfoSendMoney } from '../../components/InfoSendMoney';

export default function ConfirmDate() {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    function handleSendMoney() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        console.log('funfo');
    }

    return (
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
                <Text style={styles.title}>
                    Confirme se os dados estão
                </Text>
                <Text style={styles.value}>
                    corretos.
                </Text>
            </View>

            <View style={styles.avatar}>
                <View style={styles.IconAvatar}>
                    <Text style={styles.txtIniciaisCliente}>
                        JC
                    </Text>
                </View>

                <View style={styles.dateBank}>

                    <Text style={styles.txtNomeCliente}>
                        Jane Cooper
                    </Text>
                    <View style={styles.bank1}>
                        <Text style={styles.bank}>
                            Banco:
                        </Text>
                        <Text style={styles.txtNomeCliente}>
                            323
                        </Text>
                    </View>
                    <View style={styles.bank1}>
                        <Text style={styles.bank}>
                            Agência:
                        </Text>
                        <Text style={styles.txtNomeCliente}>
                            0001
                        </Text>
                    </View>
                    <View style={styles.bank1}>
                        <Text style={styles.bank}>
                            Conta corrente:
                        </Text>
                        <Text style={styles.txtNomeCliente}>
                            398322-9
                        </Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.editVal}>
                <Text style={styles.valor}>
                    R$50,00
                </Text>
                <Ionicons
                    name="pencil-sharp"
                    size={40}
                    color='#17B978' />
            </TouchableOpacity>

            <InfoSendMoney
                title='Data de transferência'
                description='Hoje'
            />
            <InfoSendMoney
                title='Tipo de transferência'
                description='Pix'
            />

            <Button
                disabled
                variant='outline'
                style={{ marginLeft: 20, marginBottom: 40 }}
                onPress={handleSendMoney}
                title='Tranferir'
            />

        </View>
    );
}