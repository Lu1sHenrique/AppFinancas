import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './styles';

interface ButtonProps {
    iconName?: keyof typeof Ionicons.glyphMap;
    style?: TouchableOpacityProps["style"];
}

export default function ButtonBack({ iconName,  style }: ButtonProps) {

    const navigation = useNavigation();

    return (
        <View style={[styles.containerHeader, style]}>
            <View style={styles.buttonBack}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    {iconName && (
                        <Ionicons
                            style={{ marginRight: 12 }}
                            name={iconName}
                            size={30}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}
