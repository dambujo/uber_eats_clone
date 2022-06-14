import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestauranteItems, {
  localRestaurants,
} from '../components/RestauranteItems';

const YELP_API_KEY =
  'Pa9aNRxieOWSzic1fdVAjQDTKulPZ_sdgBPtoTBAOojA1NYCFV3_o7765j3DGyBhLFt3E1HP4zGOur-4E4lwZyjxYUV5iGh-JOqILCc61b_R6qgW--Xdx2Ap9dioYnYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantssFromYelp = () => {
    const yelpUrl =
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=los%20angeles';

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((response) => response.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantssFromYelp();
  }, [restaurantData]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <StatusBar />
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestauranteItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
