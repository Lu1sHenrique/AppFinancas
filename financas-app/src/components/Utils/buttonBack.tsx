import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


export default function ButtonBack() {

    const navigation = useNavigation();

  return (
        <View style={styles.containerHeader}>
            <View style={styles.buttonBack}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={30}/>
                </TouchableOpacity>
            </View>
        </View>
  );
}
