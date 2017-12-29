import { Animated } from 'react-native'
import { BaseActions } from '../../components'

class Actions extends BaseActions {
  startSpringAnimation() {
    Animated.spring(this.state.spring, {
      toValue: 0,
      friction: 0.5,
    }).start(() => {
      Animated.spring(this.state.spring, {
        toValue: 1,
        friction: 0.5,
      }).start()
    })
  }

  startTimingAnimation() {
    Animated.timing(this.state.spring, {
      toValue: 0,
      duration: 1000,
    }).start(() => {
      Animated.timing(this.state.spring, {
        toValue: 1,
        duration: 1000,
      }).start()
    })
  }

  startDecayAnimation() {
    this.setState({ top: new Animated.Value(0) }, () => {
      Animated.decay(this.state.top, {
        // toValue: 0,
        velocity: 1,
        // deceleration: 0.5,
      }).start(() => {
        Animated.decay(this.state.top, {
          // toValue: 1,
          velocity: -1,
          // deceleration: 0.5,
        }).start()
      })
    })
  }

  startColorAnimation() {
    Animated.spring(this.state.color, {
      toValue: 0,
      friction: 0.5,
    }).start(() => {
      Animated.spring(this.state.color, {
        toValue: 1,
        friction: 0.5,
      }).start()
    })
  }

  // 为了避免频繁刷新界面，可以使用setNativeProps方法实现
  // _updatePosition(e) {
  //   const x = e.nativeEvent.locationX
  //   const y = e.nativeEvent.locationY
  //   this.setState({
  //     left: x - this.x - 30,
  //     top: y - this.y - 30,
  //   })
  // }

  _updatePosition(e) {
    const x = e.nativeEvent.locationX
    const y = e.nativeEvent.locationY
    this.animatedView && this.animatedView.setNativeProps({
      style: { left: x - this.x - 30, top: y - this.y - 30 },
    })
  }
}

module.exports = Actions