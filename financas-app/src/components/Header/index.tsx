import React from "react";
import { MotiView, MotiText } from 'moti';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, ImageBackground } from 'react-native';

import styles from "./styles";
import imagemFundo from '../../assets/bg.png';

interface HeaderProps {
    title?: string;
    name: string;
}

export default function Header({ name, title }: HeaderProps) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <ImageBackground
                source={imagemFundo}
                resizeMode='cover'
                style={styles.image} />

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
                    }}>
                    {name}
                </MotiText>
                
                <MotiText
                    style={styles.userKey}
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
                    }}>
                    {title}
                </MotiText>

                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.buttonUser}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Feather name="user" size={30} color="#fff" />
                </TouchableOpacity>
            </MotiView>
        </View>
    )
}