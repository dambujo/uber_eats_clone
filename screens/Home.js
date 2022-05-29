import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  StatusBar,
} from 'react-native';
import React from 'react';
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <StatusBar />
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}
