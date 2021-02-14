import React, { Component, createRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions
} from 'react-native'
import { Provider } from 'react-native-paper'
import { AppMenu } from '../components/menu'
import { rolem } from '../objects/str'

const HD_EXPANDED_HEIGHT = 300
const HD_COLLAPSED_HEIGHT = 60

const { width: SCREEN_WIDTH } = Dimensions.get('screen')

const menuItem = [
  { title: 'Item 1', onpress: () => {}, key: '1' },
  { title: 'Item 2', onpress: () => {}, key: '2' }
]
export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollView: createRef(),
      scrollY: new Animated.Value(0)
    }

    this.onPressHandler = this.onPressHandler.bind(this)
  }

  onPressHandler = () => {
    navigation.push('ReviewDetail')
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HD_EXPANDED_HEIGHT - HD_COLLAPSED_HEIGHT],
      outputRange: [HD_EXPANDED_HEIGHT, HD_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    })

    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HD_EXPANDED_HEIGHT - HD_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const heroTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HD_EXPANDED_HEIGHT - HD_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    return (
      <Provider>
        <View style={styles.container}>
          <Animated.View style={[styles.header, { height: headerHeight }]}>
            <Animated.Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'black',
                marginTop: 28,
                opacity: headerTitleOpacity
              }}
            >
              FAVOURITE
            </Animated.Text>

            <Animated.Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                color: 'black',
                position: 'absolute',
                bottom: 16,
                left: 16,
                opacity: heroTitleOpacity
              }}
            >
              WELCOME TO KASET APP
            </Animated.Text>
          </Animated.View>
          <ScrollView
            ref={this.state.scrollView}
            contentContainerStyle={styles.scrollContainer}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.state.scrollY
                    }
                  }
                }
              ],
              {
                listener: (event) => {
                  console.log(this.state.scrollView)
                  if (this.state.scrollY > 10)
                    this.state.scrollView.scrollTo({ y: 100, animated: true })
                },
                useNativeDriver: false
              }
            )}
            scrollEventThrottle={16}
          >
            <AppMenu key={'1'} menuItem={menuItem} />
            <Text style={styles.title}>This is Title</Text>
            <Text style={styles.content}>{rolem}</Text>
          </ScrollView>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    padding: 16,
    paddingTop: HD_EXPANDED_HEIGHT
  },
  header: {
    backgroundColor: 'rgba(107,107,107,1)',
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
