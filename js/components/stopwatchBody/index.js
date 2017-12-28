import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'

class StopwatchBody extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.circleView}
          onPress={this.props.onLeftPress}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>{this.props.leftText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circleView}
          onPress={this.props.onRightPress}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>{this.props.rightText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

StopwatchBody.propTypes = {
  onLeftPress: PropTypes.func,
  onRightPress: PropTypes.func,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
}

StopwatchBody.defaultProps = {
  onLeftPress: f => f,
  onRightPress: f => f,
  leftText: '计次',
  rightText: '启动',
}

module.exports = StopwatchBody