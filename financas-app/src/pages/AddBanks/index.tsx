import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

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

export default function AddBanks() {

    const navigation = useNavigation();

  return (
    <Header name='Luiz Henrique'/>
  );
}
