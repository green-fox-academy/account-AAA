import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerLeft: {
    flex: 1,
    alignItems: 'center',
  },
  headerBody: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchField: {
    flex: 1,
    borderRadius: 20,
    height: 35,
    backgroundColor: 'lightgray',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 25,
  },
  searchIcon: {
    fontSize: 20,
  },
  createIcon: {
    fontSize: 30,
  },
});
