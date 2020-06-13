import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;

export default class StartCarousel extends Component {

  handleScroll = (event) => {
    console.log(this.scrollOffset) // debug
    this.scrollOffset = event.nativeEvent.contentOffset.x// qndo usa o scroll atualiza o valor do Offset para a posição do scroll
  }

  scrollItem = () => {
    if (this.scrollOffset >= 800) {
      this.props.navigation.navigate('OlaDev')
    }
    else if (this.scrollOffset == undefined) { // caso o user n mexa no scroll o valor do offset fica como "undefined", então a função passa outro parametro, passando uma página
      this.scrollView.scrollTo({ x: (screenWidth) })
    } else {
      this.scrollView.scrollTo({ x: (this.scrollOffset + screenWidth) }) // Pega a posição do scroll e soma com o width da página, passando pro próx card
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <ScrollView
          onScroll={this.handleScroll}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={(scrollView) => { this.scrollView = scrollView }}>

          <Slide1 />

          <Slide2 />

          <Slide3 />

        </ScrollView>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={this.scrollItem}>
          <Text style={{ color: '#9163cc', fontWeight: "700" }}>PRÓXIMO</Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#9163cc',
    alignItems: 'center',
  },
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
  },
});
