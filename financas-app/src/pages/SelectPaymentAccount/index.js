import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import AccountsConecPayment from '../../components/AccountsConecPayment/index'
import { Feather, Ionicons } from '@expo/vector-icons'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'

const listBancos = [
    {
        id: 1,
        nr_banco: "260",
        nome_banco: "Nubank",
    },
    {
        id: 2,
        nr_banco: "001",
        nome_banco: "Banco do Brasil"
    },
    {
        id: 3,
        nr_banco: "033",
        nome_banco: "Banco Santander"
    }
  ]

export default function SelectPaymentAccount() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <View style={styles.buttonBack}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={30}/>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.containerTitle}>
            <Text style={styles.title}>Selecione a conta que deseja utilizar para realizar o pagamento.</Text>
        </View>
        
        <FlatList 
            data={listBancos}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})=> <AccountsConecPayment data={item} />}
        />
    </View>
  );
}
