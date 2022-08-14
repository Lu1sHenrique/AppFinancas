import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import styles from './styles';

const list = [
    {
        id: 1,
        label: "Boleto Conta Luz",
        value: "390,90",
        date: "17/05/2022",
        type: 0 //despesas 
    },
    {
        id: 2,
        label: "PIX Cliente X",
        value: "2.500,00",
        date: "20/05/2022",
        type: 1 //receita
    },
    {
        id: 3,
        label: "Salário",
        value: "7.500,00",
        date: "12/07/2022",
        type: 1 //receitas
    }
]


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Luis Henrique"/>

        <Balance saldo="9.250,90" gastos="-527,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Movements data={item} />}
        />
    </View>
  );
}
