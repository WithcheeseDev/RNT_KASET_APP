import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.title
    }
  }

  render() {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333'
  },
  headerText: {
    color: '#fff'
  }
})
