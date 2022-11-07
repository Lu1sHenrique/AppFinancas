import { Feather } from '@expo/vector-icons';
import { View, TextInputProps, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

interface InputTextProps extends TextInputProps {
    textPlaceholder: string;
}

export function InputText({ textPlaceholder, ...rest }: InputTextProps) {

    return (

        <View style={styles.lineInputIcon}>
            <TextInput
                placeholder={textPlaceholder}
                style={styles.input}>
            </TextInput>

            <TouchableOpacity
                onPress={() => ''}>
                    
                <Feather
                    style={{ marginEnd: 20 }}
                    name='arrow-down' size={25} color="#17B978" />
            </TouchableOpacity>
        </View>

    );
}
