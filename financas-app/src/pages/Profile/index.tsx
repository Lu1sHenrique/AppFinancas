import React, { useRef } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import AccountsConec from '../../components/AccountsConec';


const DATA = Array.from({ length: 50 }, (_i, _k) => `Banco ${_k}`);


export default function Profile() {

  const myRef = useRef(null);

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <Header name="Luis Henrique" />

          <View style={styles.containerTxtAccountsConec}>
            <Text style={styles.txtAccountsConec}>Contas Conectadas</Text>
          </View>

          <FlatList
            ref={myRef}
            getItemLayout={(_data, index) => ({
              length: DATA.length,
              offset: DATA.length * index,
              index,
            })}
            keyExtractor={(index) => index.toString()}
            data={DATA}
            renderItem={(itemData) => {
              return (
                  <AccountsConec
                    bank={itemData.item}
                    handleRigth={() => alert('Banco excluido!')} />
              )
            }} />
        </>
      } />
  );
}
