import {View, FlatList, Text, TouchableOpacity, ScrollView} from 'react-native';
import HeaderProfile from '../../components/HeaderProfile/index'
import PictureUser from '../../components/PictureUser/index'
import AccountsValue from '../../components/AccountsValue/index'
import AccountsConec from '../../components/AccountsConec'
import { Feather, AntDesign } from '@expo/vector-icons'
import styles from './styles';

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

export default function Profile() {
  return (
    <ScrollView>
      <View>
        <HeaderProfile/>

        <PictureUser/>

        <AccountsValue/>

        <View style={styles.containerTxtAccountsConec}>
          <Text style={styles.txtAccountsConec}>Contas Conectadas</Text>
        </View>

        <FlatList 
            data={listBancos}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})=> <AccountsConec data={item} />}
        />

        <View>
          <TouchableOpacity style={styles.buttonBanco}>
            <AntDesign style={styles.iconButtonbanco} name="bank" size={23}/>
            <Text style={styles.txtButtonBanco}>Conectar nova conta</Text>
            <Feather style={styles.iconButtonArrow} name="arrow-right" size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    
  );
}
