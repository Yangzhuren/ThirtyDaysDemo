import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  itemContainer: {
    marginBottom: 32,
    marginTop: 12,
    alignItems: 'flex-end',
  },

  upText: {
    color: 'gray',
    fontSize: 18,
    alignSelf: 'flex-end',
  },

  downText: {
    color: 'black',
    fontSize: 48,
  },
})

export default styles