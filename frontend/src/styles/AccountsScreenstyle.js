import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  filterOption: {
    backgroundColor: 'white',
  },
  textStyle: {
    paddingRight: 5,
    marginRight: 0,
    color: 'black',
  },
  sortIcon: {
    marginLeft: 0,
    fontSize: 15,
    color: 'black',
  },
  rowBack: {
    paddingTop: 10,
    paddingBottom: 4.5,
    marginRight: 15,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  deleteButton: {
    height: '100%',
    width: 70,
    borderRadius: 0,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    fontSize: 40,
    alignSelf: 'center',
    color: 'black',
  },
});
