import { Text, View, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

export class Categories extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 5,
          backgroundColor: '#fff',
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* loop starts here */}
          {items.map((item, index) => (
            <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                {item.text}
              </Text>
            </View>
          ))}
          {/* loop ends here */}
        </ScrollView>
      </View>
    );
  }
}

export default Categories;
