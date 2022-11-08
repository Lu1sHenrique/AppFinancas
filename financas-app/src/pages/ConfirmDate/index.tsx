import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';

import styles from './styles';
import { Button } from '../../components/Button';
import { InfoSendMoney } from '../../components/InfoSendMoney';
import ButtonBack from '../../components/Utils/buttonBack';
import { AvatarBank } from '../../components/AvatarBank';

export default function ConfirmDate() {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [calendar, setShowCalendar] = useState(false);

    function handleSendMoney() {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
        console.log('funfo');
        navigation.navigate('Proving');
    }

    return (
        <View style={styles.container}>

            <ButtonBack />

            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    Confirme se os dados estão
                </Text>
                <Text style={styles.value}>
                    corretos.
                </Text>
            </View>

            <AvatarBank />

            <TouchableOpacity 
                style={styles.editVal}
                onPress={() => navigation.navigate('AlterValSend') }
                >
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
                description='setShowCalendar'
                onPress={() => setShowCalendar(true)}
            />
            <InfoSendMoney
                title='Tipo de transferência'
                description='Pix'
            />

            <Modal
                visible={calendar}
                animationType='fade'
            >

                <Text style={styles.calendarTitle}>
                    Para qual dia será transferido?
                </Text>
                <Calendar
                    style={styles.calendar}
                    onDayPress={date => {
                        console.log(date)
                        setShowCalendar(false)
                    }}
                    firstDay={1}
                    hideArrows={false}
                    hideExtraDays={true}
                    maxDate={'2025-12-30'}
                    enableSwipeMonths={true}
                />
            </Modal>

            <Button
                disabled={loading}
                variant='outline'
                title='Tranferir'
                onPress={handleSendMoney}
                style={{ marginLeft: 20, marginBottom: 40 }}
            />

        </View>
    );
}