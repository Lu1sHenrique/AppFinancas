import React from "react";
import { View, Text,TouchableOpacity } from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'

export default function HeaderProfile(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.buttonBack}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    >
                        <Feather name="arrow-left" size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: 'center'}}>
                    <Text style={styles.txtPerfil}>Perfil</Text>
                </View>

                <View style={styles.buttonMenu}>
                    <TouchableOpacity>
                        <Entypo name="menu" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}




