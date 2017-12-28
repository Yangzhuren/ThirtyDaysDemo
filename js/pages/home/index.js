import React from 'react'
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Actions as Routers } from 'react-native-router-flux'
import styles from './styles'

const day1 = require('../../images/ICBC_01.png')
const day2 = require('../../images/PSBC_02.png')
const day3 = require('../../images/BOC_03.png')
const day4 = require('../../images/HURCB_04.png')
const day5 = require('../../images/ABC_05.png')
const day6 = require('../../images/CMB_06.png')
const day7 = require('../../images/COMM_07.png')
const day8 = require('../../images/WHRCB_08.png')
const day9 = require('../../images/GDB_09.png')
const day10 = require('../../images/HXBANK_10.png')

const data = [
  { icon: day1, title: 'day1', onPress: () => { Routers.day1() } },
  { icon: day2, title: 'day2', onPress: () => {} },
  { icon: day3, title: 'day3', onPress: () => {} },
  { icon: day4, title: 'day4', onPress: () => {} },
  { icon: day5, title: 'day5', onPress: () => {} },
  { icon: day6, title: 'day6', onPress: () => {} },
  { icon: day7, title: 'day7', onPress: () => {} },
  { icon: day8, title: 'day8', onPress: () => {} },
  { icon: day9, title: 'day9', onPress: () => {} },
  { icon: day10, title: 'day10', onPress: () => {} },
]

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `item_${index}`}
          renderItem={(item) => {
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={item.item.onPress}
            >
              <Image style={styles.icon} source={item.item.icon} />
              <Text>{item.item.title}</Text>
            </TouchableOpacity>
          )
        }}
          numColumns={4}
        />
      </View>
    )
  }
}

Home.defaultProps = {
  firstRender: true,
}

module.exports = Home