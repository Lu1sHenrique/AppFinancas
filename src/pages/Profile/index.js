import {View} from 'react-native';
import HeaderProfile from '../../components/HeaderProfile/index'
import PictureUser from '../../components/PictureUser/index'
import AccountsValue from '../../components/AccountsValue/index'

export default function Home() {
  return (
    <View>
        <HeaderProfile/>

        <PictureUser/>

        <AccountsValue/>
    </View>
  );
}
