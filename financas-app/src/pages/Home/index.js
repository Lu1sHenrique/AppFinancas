import { Text, View, FlatList, TextInput } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import {AntDesign, Foundation, Feather} from '@expo/vector-icons'
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
    },
    {
        id: 4,
        label: "Gás",
        value: "112,00",
        date: "12/07/2022",
        type: 0 //despesas
    },
    {
        id: 5,
        label: "PIX Recebido",
        value: "800,00",
        date: "12/07/2022",
        type: 1 //receitas
    },
    {
        id: 6,
        label: "Academia",
        value: "120,00",
        date: "12/07/2022",
        type: 0 //despesas
    },
    {
        id: 7,
        label: "Boleto Sapato",
        value: "80,00",
        date: "12/07/2022",
        type: 0 //despesas
    }
]


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Luis Henrique"/>

        <Balance saldo="9.250,90" gastos="-527,00"/>

        <Actions/>

        <View style={{flex: 1}}>
            <View style={{marginVertical: 20}}>
                <View style={styles.lineInputIcon}>
                    <TextInput
                    placeholder='Buscar'
                    placeholderTextColor={"#808080"}
                    style={styles.input}
                    > 
                    </TextInput>
                    <Feather style={{marginEnd: 20}} name='search' size={25} color="#808080"/>
                </View>
            </View>

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=> <Movements data={item} />}
            />
        </View>
    </View>
  );
}
