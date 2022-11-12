import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Text, View, TouchableOpacity, Animated, Modal } from 'react-native';

import styles from './styles';
import { Button } from '../Button';
import DataBank from '../DataBank';
import ButtonBack from '../Utils/buttonBack';

export default function AccountsConec({ bank, handleRigth }) {

  const navigation = useNavigation();
  const [ediBank, setShowEdiBank] = useState(false);

  function RightActions({ progress, dragX, onPress }) {

    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
    return (
       // Função arrasta p/lado
      <TouchableOpacity onPress={onPress}>
        <View style={styles.deleteBox}>
          <Ionicons
            name='trash'
            size={30}
            color='#FFF' />
          <Animated.Text
            style={[styles.action, { transform: [{ scale }] }]}>
            Remover
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <Swipeable
      renderRightActions={(progress, dragX) =>
        <RightActions
          dragX={dragX}
          progress={progress}
          onPress={handleRigth} />}
    >
      <TouchableOpacity
        style={styles.buttonBanco}
        onPress={() => setShowEdiBank(true)}
      >
        <FontAwesome
          size={23}
          name='bank'
          style={styles.iconButtonbanco} />

        <Text style={styles.txtButtonBanco}>
          {bank}
        </Text>

        <Feather
          size={25}
          name='chevron-right'
          style={{ right: 25 }} />
      </TouchableOpacity>

      <Modal
        visible={ediBank}
        animationType='fade'
        statusBarTranslucent={true}>

          <ButtonBack
          style={styles.close} 
          iconName='close'/>

        <Text style={styles.nameBank}>
          {bank}
        </Text>

        <DataBank/>

        <Button
          variant='primary'
          title='Editar'
          onPress={() => navigation.navigate('AddBanks')}
          style={{ marginLeft: 20, marginBottom: 40 }} />

        <Button
          disabled={false}
          variant='outline'
          title='Compartilhar pix'
          onPress={() =>{}}
          style={{ marginLeft: 20, marginBottom: 40 }} />
      </Modal>

    </Swipeable>
  );
}