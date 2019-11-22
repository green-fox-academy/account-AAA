import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  oneCard: {
    width: 350,
    height: 250,
    marginLeft: 13,
    marginTop: 10,
  },
  cardItem: {
    width: 350,
    height: 130,
    backgroundColor: '#E0EEEE',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  idText: {
    marginTop: 5,
    marginLeft: 10,
    height: 40,
    fontSize: 20,
    color: 'grey',
  },
  nameText: {
    marginLeft: 10,
    fontSize: 35,
    height: 40,
  },
  interestRate: {
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
