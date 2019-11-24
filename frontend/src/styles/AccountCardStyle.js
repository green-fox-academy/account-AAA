import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  oneCard: {
    width: 350,
    height: undefined,
    marginLeft: 13,
    marginTop: 10,
  },
  cardItem: {
    width: 350,
    height: 130,
    backgroundColor: '#E0EEEE',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  idText: {
    marginTop: 5,
    marginLeft: 10,
    height: 40,
    fontSize: 20,
    color: 'grey',
  },
  views: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',

  },
  nameText: {
    marginLeft: 10,
    height: 50,
    fontSize: 38,
    flexWrap: 'wrap',
    maxWidth: 250,
    flexGrow: 1,
    flexShrink: 1,
  },
  interestRate: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    height: 25,
  },
  middleCardItem: {
    backgroundColor: '#E0EEEE',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  depositAmount: {
    fontSize: 40,
    color: 'orange',
    backgroundColor: '#E0EEEE',
  },
  buttonCardItem: {
    width: 350,
    height: 50,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  dollarIcon: {
    marginLeft: 50,
    marginTop: 11,
  },
});
