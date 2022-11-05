import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, FlatList, TextInput } from 'react-native';

import styles from './styles';
import SaveContacts from '../../components/SaveContacts';
import ButtonBack from '../../components/Utils/buttonBack';

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
    },
    {
        id: 6,
        nome: "Guilherme Lucca Breno da Rocha",
        cpf: "08243155880",
        telefone: "83993220813",
        email: "guilherme.lucca.darocha@ocaconsultoria.com"
    },
    {
        id: 7,
        nome: "Lívia Sônia Rodrigues",
        cpf: "07671875716",
        telefone: "69997647488",
        email: "liviasoniarodrigues@aichele.com.br"
    }
]

export default function SelectKeyPayment() {

    const navigation = useNavigation();

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={
                <>
                    <ButtonBack />

                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>
                            Para quem você quer transferir
                            <Text style={styles.value}>
                                R$ 50,00
                            </Text>
                            ?
                        </Text>
                    </View>

                    <View style={{ marginTop: 30, marginBottom: 40 }}>
                        <View style={styles.lineInputIcon}>
                            <TextInput
                                placeholder='Procura por quem?'
                                placeholderTextColor={"#808080"}
                                style={styles.input}>
                            </TextInput>
                            <Feather
                                style={{ marginEnd: 20 }}
                                name='search' size={25} color="#808080" />
                        </View>
                    </View>

                    <FlatList
                        data={listBancos}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) =>
                            <SaveContacts
                                data={item} />}
                    />
                </>
            }
        />
    );
}