import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, Dimensions, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import RepoMainCard from '../../Components/repoMainCard';

const screenWidth = Dimensions.get('window').width;

export default class OlaDev extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.headerDiv}>
            <FontAwesome5 name="bars" size={24} color="white" style={styles.bars} />

            <Text style={styles.pageTitle}>Olá, Devs</Text>

            <View style={styles.searchSection}>
              <TextInput
                style={styles.searchBar}
                inlineImageLeft={'search'}
                placeholder={'Procurar'}
              />
              <FontAwesome name="search" size={24} color="black" style={styles.searchIcon} />
            </View>
          </View>

          <Text style={styles.sugeridosText}>Sugeridos</Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View>
              <RepoMainCard navigation={this.props.navigation} url="https://api.github.com/repos/JaderMeinerz/HTML4Noobs" />
              <RepoMainCard navigation={this.props.navigation} url="https://api.github.com/repos/IUX7K/ux4noobs" />
            </View>
            <View>
              <RepoMainCard navigation={this.props.navigation} url="https://api.github.com/repos/JaderMeinerz/HTML4Noobs" />
              <RepoMainCard navigation={this.props.navigation} url="https://api.github.com/repos/IUX7K/ux4noobs" />
            </View>

          </ScrollView>

        </ScrollView>
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
  },
  headerDiv: {
    width: screenWidth - 60,
    alignSelf: 'center',
    marginBottom: 25
  },
  bars: {
    alignSelf: 'flex-end',
  },
  pageTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
    alignSelf: 'flex-start',
    marginBottom: 15
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15
  },
  searchIcon: {
    marginRight: 20
  },
  searchBar: {
    backgroundColor: 'white',
    width: screenWidth - 80,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  sugeridosText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 30
  },
})