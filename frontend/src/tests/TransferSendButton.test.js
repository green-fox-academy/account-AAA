import React from 'react';
import renderer from 'react-test-renderer';
import TransferSendButton from '../components/TransferScreenComponents/TransferSendButton';

describe('<TransferSendButton />', () => {
  it('render correctly', () => {
    const sendTransfer = () => null;
    const token = 'test';

    const data = {
      account: {
        id: 1,
        depositName: 'Main Account',
      },
    };
    const navigation = {
      getParam: (key) => data[key],
    };
    const depositAmount = 0.0;
    const newTransfer = {
      transferId: 12,
      transferAmount: 12,
      fromUserId: 12,
      fromDepositId: 12,
      toUserId: 12,
      toDepositId: 12,
      status: 'test',
      timeOfTransfer: 'test',
      direction: 'test',
      nameToUse: 'test',
    };

    const tree = renderer
      .create(
        <TransferSendButton
          navigation={navigation}
          token={token}
          sendTransfer={sendTransfer}
          depositAmount={depositAmount}
          newTransfer={newTransfer}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
