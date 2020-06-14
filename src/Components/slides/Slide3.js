import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;

export default function Slide3() {
  return (
    <View style={styles.item}>
      <Image
        style={{ resizeMode: 'contain', marginTop: 130, backgroundColor: '#9163cc', width: screenWidth }}
        source={require('../../assets/StartCarouselImgs/discordIcon.png')} />
      <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', fontWeight: '700', marginHorizontal: 30, marginBottom: 25 }}>Acesse nosso {"\n"} Discord!</Text>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => {Linking.openURL('https://discord.gg/tG5kmb')}}>
        <Text style={{ color: '#9163cc', fontWeight: "700" }}>ENTRAR NO DISCORD</Text>
      </TouchableOpacity>
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
  mainButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 52,
    borderRadius: 22,
    marginBottom: 30 //joga o botão para cima
  }
})