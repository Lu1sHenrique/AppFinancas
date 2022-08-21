import React from "react";
import { View, Text,TouchableOpacity } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'
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
                        <Ionicons name="chevron-back" size={30}/>
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




