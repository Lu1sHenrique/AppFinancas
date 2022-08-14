import React from "react";
import { View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'
import styles from "./styles";

export default function Header({name}){
    return(
        <View style={styles.container}>
           <Text>header profile</Text>
        </View>
    )
}




