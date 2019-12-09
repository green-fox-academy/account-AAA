import { StyleSheet, Platform } from 'react-native';


export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: Platform.OS === 'ios' ? 50 : 100,
    marginRight: 30,
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    color: 'white',
  },

  iconFont: {
    paddingLeft: 10,
    paddingRight: 0,
    marginRight: 0,
  },
  message: {
    marginRight: 50,
    color: 'grey',
  },
  view: {
    flex: 6,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
