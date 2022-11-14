import { Feather } from '@expo/vector-icons';
import { View, TextInputProps, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

interface InputTextProps extends TextInputProps {
    textPlaceholder: string;
    onPress?: () => void;
    iconName?: keyof typeof Feather.glyphMap;
}

export function InputText({ textPlaceholder, iconName, onPress }: InputTextProps) {

    return (

        <View style={styles.lineInputIcon}>
            <TextInput
                placeholder={textPlaceholder}
                style={styles.input}>
            </TextInput>

            <TouchableOpacity>
                {iconName && (
                    <Feather
                        style={{ marginRight: 20 }}
                        name={iconName}
                        size={25}
                        color='#17B978'
                        onPress={onPress}
                    />
                )}
            </TouchableOpacity>
        </View>

    );
}
