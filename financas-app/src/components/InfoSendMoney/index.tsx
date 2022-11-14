import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface ButtonProps {
    title: string;
    description: string | number;
    onPress?: () => void;
}


export function InfoSendMoney({ onPress, title, description }: ButtonProps) {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <View >
                <Text style={styles.date}>
                    {title}
                </Text>
                <Text style={styles.day}>
                    {description}
                </Text>
            </View>
            <Ionicons
                name="chevron-down"
                size={40}
                color='#17B978' />
        </TouchableOpacity>
    );
}