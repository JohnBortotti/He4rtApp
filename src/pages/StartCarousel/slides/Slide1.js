import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;

export default function Slide1() {
  return (
    <View style={styles.item}>
      <Image
        style={{ width: 160, height: 160, resizeMode: 'contain', marginBottom: 15 }}
        source={require('../../../assets/StartCarouselImgs/initial-logo.png')} />
      <Text
        style={{ color: 'white', fontSize: 30, fontWeight: '700', marginBottom: 15 }}>BEM-VINDO!</Text>
      <Text
        style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: '700', marginHorizontal: 30 }}>Neste aplicativo você tem acesso a todos os repositórios dos membros da He4rt Developers</Text>
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