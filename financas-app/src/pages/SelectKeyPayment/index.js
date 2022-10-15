import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import SaveContacts from '../../components/SaveContacts';
import ButtonBack from '../../components/Utils/buttonBack'

const listBancos = [
    {
        id: 1,
        nome: "Luis Henrique de Freitas Teixeira",
        cpf: "03239924200",
        telefone: "91988571688",
        email: "lhenrique.lh000@gmail.com"
    },
    {
        id: 2,
        nome: "Nicole Aparecida Letícia Fernandes",
        cpf: "86872295775",
        telefone: "917928395217",
        email: "nicole.aparecida.fernandes@andrediaz.com"
    },
    {
        id: 3,
        nome: "César Nathan da Costa",
        cpf: "17908243037",
        telefone: "63984544574",
        email: "cesar-dacosta92@ppconsulting.com.br"
    },
    {
        id: 4,
        nome: "Guilherme Lucca Breno da Rocha",
        cpf: "08243155880",
        telefone: "83993220813",
        email: "guilherme.lucca.darocha@ocaconsultoria.com"
    },
    {
        id: 5,
        nome: "Lívia Sônia Rodrigues",
        cpf: "07671875716",
        telefone: "69997647488",
        email: "liviasoniarodrigues@aichele.com.br"
    }
  ]

export default function SelectKeyPayment() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <ButtonBack />
        
        <View style={styles.containerTitle}>
            <Text style={styles.title}>Para quem você quer transferir <Text style={styles.value}>R$ 50,00</Text>?</Text>
        </View>

        <View style={styles.containerSubTitle}>
            <Text style={styles.subTitle}>Transfira para um novo contato ou busque na lista</Text>
        </View>

        <View style={{marginVertical: 20}}>
            <View style={styles.lineInputIcon}>
                <TextInput
                placeholder='CPF/CNPJ, celular, e-mail ou aleatória'
                placeholderTextColor={"#808080"}
                style={styles.input}
                > 
                </TextInput>
            </View>
        </View>

        <View style={{marginTop: 30, marginBottom: 40}}>
            <View style={styles.lineInputIcon}>
                <TextInput
                placeholder='Procura por quem?'
                placeholderTextColor={"#808080"}
                style={styles.input}
                > 
                </TextInput>
                <Feather style={{marginEnd: 20}} name='search' size={25} color="#808080"/>
            </View>
        </View>
        
        <FlatList 
            data={listBancos}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})=> <SaveContacts data={item} />}
        />
    </View>
  );
}
