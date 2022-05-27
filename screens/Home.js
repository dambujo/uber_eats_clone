import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  StatusBar,
} from 'react-native';
import React from 'react';
import HeaderTab from '../components/headerTab/HeaderTab';

export default function Home() {
  return (
    <SafeAreaView>
      <StatusBar />
      <HeaderTab />
    </SafeAreaView>
  );
}