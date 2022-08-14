import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {AntDesign, Foundation} from '@expo/vector-icons'
import styles from './styles'

export default function Actions() {
 return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
       <Text>accounts value</Text>
    </ScrollView>
  );
}