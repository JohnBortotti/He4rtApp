import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class repoMainCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repo: {
        owner: {}
      },
    };
  }

  componentDidMount() { //fetch na API e insere os dados no state
    fetch(this.props.url)
      .then(res => res.json())
      .then(res => this.setState({ repo: res }));
  }

  render() {
    const { repo } = this.state;

    return (
      <TouchableWithoutFeedback
        onPress={() => { this.props.navigation.navigate('RepoWebView',  { // ao clicar no card chama o componente webView passando a url como parâmetro
          url: repo.html_url
        })}}>

        <View style={styles.card}>

          <View style={styles.rowDiv}>
            <View style={styles.rowDiv}>
              <Image source={{ uri: repo.owner.avatar_url }} style={styles.ownerIcon} />
              <Text style={styles.ownerName}>{repo.owner.login}</Text>
            </View>

            <TouchableWithoutFeedback
            onPress={() => {console.log("CLIQUE FAVORITO")}}>
              <AntDesign name="hearto" size={24} color="#9163cc" style={styles.favIcon} />
            </TouchableWithoutFeedback>

          </View>

          <Text style={styles.repoName}>{repo.name}</Text>

          <View style={styles.rowDiv}>
            <Text style={styles.category}>Programação</Text>
            <View style={styles.rowDiv}>
              <AntDesign name="star" size={20} color="#9163cc" />
              <Text style={styles.category}>{repo.stargazers_count}</Text>
            </View>
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    width: 230,
    height: 100,
    borderRadius: 10,
    padding: 10,
    margin: 8
  },
  rowDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ownerIcon: {
    width: 20,
    marginRight: 4
  },
  ownerName: {
    color: '#9163cc',
    fontWeight: "700",
    fontSize: 13,
  },
  favIcon: {},
  repoName: {
    color: '#9163cc',
    fontSize: 18,
    marginBottom: 10
  },
  category: {
    color: '#9163cc',
    fontWeight: '700'
  }
})