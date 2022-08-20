import React from "react";
import { View, Text,TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'
import styles from "./styles";

export default function HeaderProfile(){
    return(
        <View style={styles.container}>
           <TouchableOpacity style={styles.buttonUser}>
                <Feather name="user" size={40}/>
           </TouchableOpacity>
        </View>
    )
}