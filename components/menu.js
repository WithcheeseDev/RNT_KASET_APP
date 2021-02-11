import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Menu, Button, Provider } from 'react-native-paper'

export class AppMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

    this.onOpenMenu = this.onOpenMenu.bind(this)
    this.onCloseMenu = this.onCloseMenu.bind(this)
  }

  onOpenMenu = () => {
    if (!this.state.visible) {
      this.setState({ visible: true })
    }
  }

  onCloseMenu = () => {
    if (this.state.visible) {
      this.setState({ visible: false })
    }
  }

  render() {
    return (
      <Menu
        visible={this.state.visible}
        onDismiss={this.onCloseMenu}
        anchor={<Button onPress={this.onOpenMenu}>Show menu</Button>}
      >
        {this.props.menuItem.map((item) => (
          <Menu.Item onPress={() => {}} title={item.title} />
        ))}
      </Menu>
    )
  }
}

export default AppMenu
