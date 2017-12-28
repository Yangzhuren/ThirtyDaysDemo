import { Dimensions, PixelRatio } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const { width, height } = Dimensions.get('window')

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  itemContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'gray',
  },

  icon: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
})

export default styles