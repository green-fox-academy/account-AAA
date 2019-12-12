import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  accountCard: {
    height: 200,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#263852',
  },
  accountInfo: {
    flex: 5,
    borderRadius: 15,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  depositName: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 25,
    flexWrap: 'wrap',
    maxWidth: 250,
  },
  depositAmount: {
    paddingLeft: 10,
    color: '#FFFFFF',
    paddingTop: 10,
    fontSize: 35,
  },
  interestRate: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 15,
  },
  accountActions: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonAction: {
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
