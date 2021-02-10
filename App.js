import React, { useState } from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { HomeStack } from './routes/homestack'
import { HomeDrawer } from './routes/homeDrawer'
import Home from './screens/home'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loadingFont: true
    }

    this._loadingFont = this._loadingFont.bind(this)
  }

  componentDidMount() {
    this._loadingFont()
  }

  async _loadingFont() {
    await Font.loadAsync({
      nunito: require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    })

    this.setState({ loadingFont: false })
  }

  render() {
    const { loadingFont } = this.state

    if (loadingFont) {
      return (
        <AppLoading onFinish={() => setFontsLoaded(true)} onError={() => console.log('ERROR')} />
      )
    }

    return <Home />
  }
}
