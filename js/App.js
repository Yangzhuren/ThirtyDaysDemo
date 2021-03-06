/**
 * root of app
 * @author YX
 * @date 2017-12-19
 * @flow
 */
import React from 'react'
import { Platform, Picker } from 'react-native'
import { Stack, Scene, Router } from 'react-native-router-flux'
import EStyleSheet from 'react-native-extended-stylesheet'
import dva from 'dva-no-router'
import MainTabBarAndroid from './pages/mainTabBarAndroid'
import { registerModels } from './models'
import Theme from './theme'
import Home from './pages/home'
import Day1 from './pages/day1'
import Animation from './pages/animation'
import Day3 from './pages/day3'
import Day4 from './pages/day4'

EStyleSheet.build(Theme)

const _renderMainTabs = () => (
  Platform.select({
    ios: (
      <Scene tabs key='native' hideNavBar>
        <Scene key='home' component={Home} title='Home' />
        <Scene key='work' component={Home} title='Work' />
        <Scene key='mine' component={Home} title='Mine' />
      </Scene>
    ),
    android: (
      <Scene key='mine' component={MainTabBarAndroid} title='Mine' />
    ),
  })
)


const Root = () => (
  <Router>
    <Stack key='root'>
      {_renderMainTabs()}
      <Scene key='day1' component={Day1} title='Day1' />
      <Scene key='animation' component={Animation} title='Animation' />
      <Scene key='dataBasePage' component={Day3} title='Data Base' />
      <Scene key='anim' component={Day4} title='Animation' />
    </Stack>
  </Router>
)

const app = dva({
  initialState: {},
})

registerModels(app)

app.router(() => <Root />)

const App = app.start()

export default App