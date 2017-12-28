import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { StopwatchHeader, StopwatchBody } from '../../components'
import styles from './styles'
import Actions from './actions'

export default class Day1 extends React.Component {
  constructor(props) {
    super(props)
    new Actions(this)
    this._renderItem = this._renderItem.bind(this)
    this.state = {
      upMinutes: '00',
      upMiles: '00.00',
      downMinutes: '00',
      downMiles: '00.00',

      leftText: '计次',
      rightText: '启动',

      records: [],
    }
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer)
  }

  _renderItem(data) {
    const { item: { time, index } } = data
    return (
      <View style={styles.itemContainer}>
        <Text>{index + 1}</Text>
        <Text>{time}</Text>
      </View>
    )
  }

  render() {
    const {
      upMinutes, upMiles, downMinutes, downMiles, leftText, rightText, records,
    } = this.state
    return (
      <View style={styles.container}>
        <StopwatchHeader
          upMinutes={upMinutes}
          upMiles={upMiles}
          downMinutes={downMinutes}
          downMiles={downMiles}
        />
        <StopwatchBody
          leftText={leftText}
          rightText={rightText}
          onLeftPress={this._doLeftPress}
          onRightPress={this._doRightPress}
        />
        <FlatList
          data={records}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `item_${index}`}
        />
      </View>
    )
  }
}