import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: ' Radisson Blu',
    image_url:
      'https://media.radissonhotels.net/image/radisson-blu-hotel-residence-maputo/restaurant/16256-114173-f62747652_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610',
    categories: ['Restaurant', 'Bar'],
    price: '$120',
    reviws: 2350,
    rating: 4.7,
    time: '20-30 . min',
  },
  {
    name: 'Restaurante Nom',
    image_url:
      'https://www.diarioeconomico.co.mz/wp-content/uploads/2022/04/restaurante_Easy-Resize.com_.jpg',
    categories: ['Restaurant', 'Bar', 'Cafe'],
    price: '$120',
    reviws: 3560,
    rating: 4.9,
    time: '20-40 . min',
  },
  {
    name: 'Restaurante Zambi',
    image_url:
      'https://clubofmozambique.com/wp-content/uploads/2016/12/Zambi.png',
    categories: ['Restaurant', 'Bar'],
    price: '$120',
    reviws: 1350,
    rating: 4.5,
    time: '25-45 . min',
  },
];

export default function RestauranteItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo
            name={restaurant.name}
            rating={restaurant.rating}
            timing={restaurant.time}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>{props.timing}</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
