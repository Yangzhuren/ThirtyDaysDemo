/**
 * @flow
 */
import React from 'react'
import { View, Button } from 'react-native'
import LottieView from 'lottie-react-native'

export default class Day4 extends React.Component {
  constructor(props) {
    super(props)
    this.animating = false
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView
          style={{ height: 200 }}
          source={require('./animations/LottieLogo1.json')}
          ref={(ref) => { this.anim = ref }}
        />
        <Button
          title='press me'
          onPress={() => {
            if (this.animating) {
              this.animating = false
              this.anim.reset()
            } else {
              this.animating = true
              this.anim.play()
            }
          }}
        />
      </View>
    )
  }
}