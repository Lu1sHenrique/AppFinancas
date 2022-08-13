import { StyleSheet, Text, View, FlatList } from 'react-native';
import HeaderProfile from '../../components/HeaderProfile/index'
import PictureUser from '../../components/PictureUser/index'
import AccountsValue from '../../components/AccountsValue/index'

export default function Home() {
  return (
    <View style={styles.container}>
        <HeaderProfile/>

        <PictureUser/>

        <AccountsValue/>
    </View>
  );
}
