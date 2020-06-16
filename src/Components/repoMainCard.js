import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
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

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(res => this.setState({ repo: res }));
  }

  render() {
    const { repo } = this.state;

    return (
      <View style={styles.card}>

        <View style={styles.rowDiv}>
          <Text style={styles.ownerName}>{repo.owner.login}</Text>
          <AntDesign name="hearto" size={24} color="#9163cc" style={styles.favIcon} />
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
    padding: 10
  },
  rowDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ownerName: {
    color: '#9163cc',
    fontWeight: "700",
    fontSize: 15,
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