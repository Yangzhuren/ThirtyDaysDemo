import React from 'react'
import { DrawerLayoutAndroid, View, Text, Dimensions } from 'react-native'
import Home from '../home'

const { width } = Dimensions.get('window')

const tabs = {
  home: {
    title: 'Home',
    page: <Home />,
  },
  work: {
    title: 'Work',
    page: <Text firstRender={true}>Work</Text>,
  },
  main: {
    title: 'Main',
    page: <Home />,
  },
}

class MainTabBarAndroid extends React.Component {
  constructor(props) {
    super(props)
    this._renderTabs = this._renderTabs.bind(this)
    this._renderScene = this._renderScene.bind(this)
    this.state = {
      tab: Object.keys(tabs)[0],
    }
  }

  _renderTabs() {
    const navigators = Object.keys(tabs).map((item) => {
      let fontColor = 'black'
      if (this.state.tab === item) fontColor = 'red'
      return (
        <Text
          onPress={() => {
            this._drawer.closeDrawer()
            this.setState({ tab: item })
          }}
          style={{ color: fontColor }}
          key={`tab_${item}`}
        >{tabs[item].title}
        </Text>
      )
    })
    return navigators
  }

  _renderPage(child) {
    if (child.props.firstRender) {
      return child
    }
    return null
  }

  _renderScene() {
    return Object.keys(tabs).map((key) => {
      let left = width
      if (key === this.state.tab) {
        left = 0
      }
      return (
        <View
          key={`scene_${key}`}
          style={{ flex: 1, left, position: 'absolute' }}
        >
          {this._renderPage(tabs[key].page)}
        </View>
      )
    })
    // return tabs[this.state.tab].page
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(ref) => { this._drawer = ref }}
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (
          <View>
            {this._renderTabs()}
          </View>
        )}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          {this._renderScene()}
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

module.exports = MainTabBarAndroid