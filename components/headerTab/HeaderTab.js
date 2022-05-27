import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

export default function HeaderTab() {
  return (
    <View style={styles.main}>
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup" />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity style={styles.headerButton}>
    <Text style={styles.headerTitle}>{props.text} </Text>
  </TouchableOpacity>
);
