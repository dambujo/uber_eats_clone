import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeveTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeveTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.btnColor,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.textColor, fontSize: 15, fontWeight: '900' }}>
      {props.text}{' '}
    </Text>
  </TouchableOpacity>
);
