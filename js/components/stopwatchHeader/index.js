import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'

class StopwatchHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.upText}>{this.props.upMinutes}:{this.props.upMiles}</Text>
          <Text style={styles.downText}>{this.props.downMinutes}:{this.props.downMiles}</Text>
        </View>
      </View>
    )
  }
}

StopwatchHeader.propTpyes = {
  upMinutes: PropTypes.string,
  upMiles: PropTypes.string,
  downMinutes: PropTypes.string,
  downMiles: PropTypes.string,
}

StopwatchHeader.defaultProps = {
  upMinutes: '00',
  upMiles: '00.00',
  downMinutes: '00',
  downMiles: '00.00',
}

module.exports = StopwatchHeader