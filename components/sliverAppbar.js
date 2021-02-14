import React, { Component } from 'react'
import { Text, View, Animated, StyleSheet } from 'react-native'

export default class SliverAppbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Animated.View style={[styles.header, { height: this.props.headerHeight }]}>
        <Animated.Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: 'black',
            marginTop: 28,
            opacity: this.props.headerTitleOpacity
          }}
        >
          WELCOME TO KASET APPLICATION
        </Animated.Text>

        <Animated.Text
          style={{
            textAlign: 'center',
            fontSize: 32,
            color: 'black',
            position: 'absolute',
            bottom: 16,
            left: 16,
            opacity: this.props.heroTitleOpacity
          }}
        >
          {this.props.headerTitle}
        </Animated.Text>
      </Animated.View>
    )
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    scrollContainer: {
      padding: 16,
      paddingTop: HEADER_EXPANDED_HEIGHT
    },
    header: {
      backgroundColor: '#555',
      position: 'absolute',
      width: SCREEN_WIDTH,
      top: 0,
      left: 0,
      zIndex: 9999
    },
    title: {
      marginVertical: 16,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 24
    }
  })
}
