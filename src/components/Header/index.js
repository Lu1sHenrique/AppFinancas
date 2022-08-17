import React, { Profiler } from "react";
import { View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'

export default function Header({name}){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <MotiView 
            style={styles.content}
            from={{
                translateY: -150,
                opacity: 0,
            }}
            animate={{
                translateY: 0,
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                duration: 800,
                delay: 300
            }}
            >
                <MotiText 
                style={styles.userName}
                from={{
                    translateX: -300,
                }}
                animate={{
                    translateX: 0
                }}
                transition={{
                    type: 'timing',
                    duration: 800,
                    delay: 800
                }}
                >{name}</MotiText>

                <TouchableOpacity 
                activeOpacity={0.9} 
                style={styles.buttonUser}
                onPress={ () => navigation.navigate('Profile')}
                >
                    <Feather name="user" size={27} color="#fff"/>
                </TouchableOpacity>
            </MotiView>
        </View>
    )
}




