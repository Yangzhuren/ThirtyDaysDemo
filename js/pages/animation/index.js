import React from 'react'
import { PixelRatio, Animated, View, Button, Text, Dimensions, TouchableOpacity } from 'react-native'
import style from './style'
import Actions from './actions'

const { width, height } = Dimensions.get('window')

class Animation extends React.Component {
static navigationOptions = ({ navigation }) => {
  const { params = {} } = navigation.state
  return (
    {
      headerRight: (<Button
        title='shit'
        onPress={() => {
          if (params.handleMenu) {
            console.log('get pressed')
            params.handleMenu()
          }
        }
        }
      />),
    }
  )
}

constructor(props) {
  super(props)
  new Actions(this)
  this.boxHeight = height
  this.state = {
    spring: new Animated.Value(1),
    top: new Animated.Value(0),
    left: 0,
    boxTop: new Animated.Value(-this.boxHeight),
    color: new Animated.Value(1),
  }
}

componentDidMount() {
  this.setState({ boxTop: new Animated.Value(-this.boxHeight) }, () => {
    const { setParams } = this.props.navigation
    setParams({ handleMenu: this._handleMenu })
  })
}

_handleMenu = () => {
  if (this.state.boxTop._value === 0) {
    Animated.timing(this.state.boxTop, {
      toValue: -this.boxHeight,
      duration: 500,
    }).start()
  } else {
    Animated.timing(this.state.boxTop, {
      toValue: 0,
      duration: 500,
    }).start()
  }
}

render() {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderStart={(e) => {
        console.log('native event start', e.nativeEvent)
      }}
      onResponderGrant={(e) => {
        this._updatePosition(e)
        // console.log('native event grant', e.nativeEvent)
      }}
      onResponderMove={(e) => {
        this._updatePosition(e)
        // console.log('native event move', e.nativeEvent)
      }}
      onResponderRelease={(e) => {
        this._updatePosition(e)
        // console.log('native event release', e.nativeEvent)
      }}
    >
      <Animated.View
        ref={(ref) => { this.animatedView = ref }}
        onLayout={(e) => {
          if (!this.geted) {
            this.geted = true
            this.x = e.nativeEvent.layout.x
            this.y = e.nativeEvent.layout.y
            // console.log('this x', this.x)
            // console.log('this y', this.y)
          }
      }}
        style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: this.state.color.interpolate({
              inputRange: [0, 1],
              outputRange: ['red', 'yellow'],
            }),
            top: this.state.top,
            left: this.state.left,
            transform: [{
                scale: this.state.spring,
            }],
        }}
      >
      </Animated.View>

      <Animated.View
        onLayout={(e) => {
          this.boxHeight = e.nativeEvent.layout.height
        }}
        style={{
          position: 'absolute',
          width,
          alignItems: 'center',
          justifyContent: 'flex-end',
          bottom: this.state.boxTop,
          backgroundColor: 'rgba(0,0,0,0)',
        }}
      >
        <CustomButton title='Spring' onPress={this.startSpringAnimation} />
        <CustomButton title='Timing' onPress={this.startTimingAnimation} />
        <CustomButton title='Decay' onPress={this.startDecayAnimation} />
        <CustomButton title='Color' onPress={this.startColorAnimation} />
      </Animated.View>
    </View>
  )
}
}

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderBottomWidth: 1 / PixelRatio.get(),
          borderBottomColor: '#e3e3e3',
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          width,
        }}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            margin: 10,
          }}
        >{this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

module.exports = Animation