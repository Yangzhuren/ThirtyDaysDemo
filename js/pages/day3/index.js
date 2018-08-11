import React from 'react'
import { View, FlatList, Text } from 'react-native'

class DataBasePage extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={[1, 2, 3, 4]}
          keyExtractor={(item, index) => `item${index}`}
          renderItem={(item) => {
            return (
              <Text style={{ textAlign: 'center' }}>
                yaho!!
              </Text>
            )
          }}
        />
      </View>
    )
  }
}

export default DataBasePage