import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export default class OlaDev extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Text>Olá, Dev</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#9163cc',
    alignItems: 'center',
  }
})