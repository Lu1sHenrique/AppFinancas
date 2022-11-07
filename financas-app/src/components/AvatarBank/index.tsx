import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export function AvatarBank() {

  return (
    <View style={styles.avatar}>

      <View style={styles.IconAvatar}>
        <Text style={styles.txtIniciaisCliente}>
          JC
        </Text>
      </View>

      <View style={styles.dateBank}>

        <Text style={styles.txtNomeCliente}>
          Jane Cooper
        </Text>
        <View style={styles.bank1}>
          <Text style={styles.bank}>
            Banco:
          </Text>
          <Text style={styles.txtNomeCliente}>
            323
          </Text>
        </View>
        <View style={styles.bank1}>
          <Text style={styles.bank}>
            Agência:
          </Text>
          <Text style={styles.txtNomeCliente}>
            0001
          </Text>
        </View>
        <View style={styles.bank1}>
          <Text style={styles.bank}>
            Conta corrente:
          </Text>
          <Text style={styles.txtNomeCliente}>
            398322-9
          </Text>
        </View>
      </View>
    </View>
  );
}