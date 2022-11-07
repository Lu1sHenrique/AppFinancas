import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Animated } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from './styles';

export default function AccountsConec({ bank, handleRigth }) {

  const navigation = useNavigation();

  function RightActions({ progress, dragX, onPress }) {

    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.deleteBox}>
          <Ionicons
            name="trash"
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
        onPress={() => navigation.navigate('AddBanks')}
      >
        <FontAwesome
          size={23}
          name="bank"
          style={styles.iconButtonbanco} />

        <Text style={styles.txtButtonBanco}>
          {bank}
        </Text>

        <Feather
          size={15}
          name="arrow-right"
          style={{ right: 25 }} />
      </TouchableOpacity>
    </Swipeable>
  );
}