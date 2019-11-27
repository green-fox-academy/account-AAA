import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  accountInfo: {
    backgroundColor: '#E0EEEE',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  depositId: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 20,
    color: 'grey',
  },
  depositName: {
    marginLeft: 10,
    fontSize: 38,
    flexWrap: 'wrap',
    maxWidth: 250,
  },
  interestRate: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 15,
  },
  balance: {
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
});
