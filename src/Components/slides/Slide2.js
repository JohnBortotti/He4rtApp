import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;

export default function Slide2() {
  return (
    <View style={styles.item}>
      <Image
        style={{ marginLeft: 200, width: 400, height: 300, resizeMode: 'cover' }}
        source={require('../../assets/StartCarouselImgs/initialDraw.png')} />
      <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: '700', marginHorizontal: 30 }}>Todos os repositórios são gratuitos para você estudar, caso queira contribuir acesse nossa comunidade</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeigth - 300,
  },
})