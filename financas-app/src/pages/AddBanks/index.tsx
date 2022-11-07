import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from './styles';
import CheckBox from 'expo-checkbox';
import Header from '../../components/Header';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';

export default function AddBanks() {

  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleAdicionar() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log('funfo');
  }

  return (
    <View style={styles.container}>

      <Header name='Luiz Henrique' />

      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          Qual banco vamos incluir na
        </Text>
        <Text style={styles.value}>
          carteira?
        </Text>
      </View>

      <ScrollView>
        <InputText textPlaceholder={'Bancos'} />
        <InputText textPlaceholder={'Agência'} />
        <InputText textPlaceholder={'Número da conta'} />
        <InputText textPlaceholder={'Tipo da conta'} />
        <InputText textPlaceholder={'Chave pix'} />

        <View style={styles.checkbox}>
          <CheckBox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? '#17B978' : undefined}
          />

          <Text style={styles.text}>
            Tornar este banco o principal
          </Text>
        </View>

        <Button
          disabled={!agree}
          variant='outline'
          style={{ marginLeft: 20 }}
          onPress={handleAdicionar}
          title='Adicionar'
        />

      </ScrollView>
    </View>
  );
}
