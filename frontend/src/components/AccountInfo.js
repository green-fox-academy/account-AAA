import React from 'react';
import {
  CardItem, Text, Button, View,
} from 'native-base';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
} from 'react-native-modals';
import accountPropTypes from '../helpers/accountPropTypes';
import styles from '../styles/AccountInfoStyle';

export default function AccountInfo({ account }) {
  const {
    id, depositName, interestRate, depositAmount,
  } = account;

  const [visible, setVisible] = React.useState(false);
  const [accountName, setAccountName] = React.useState('');

  const handleChange = (text) => {
    setAccountName(text);
  };


  return (
    <>
      <CardItem style={styles.accountInfo}>
        <Text style={styles.depositId}>{`ID ${id}`}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300 }}>
          <Text numberOfLines={1} style={styles.depositName}>{`${depositName}`}</Text>
          <Button footer onPress={() => setVisible(true)} transparent>
            <FontAwesome name="edit" size={18} />
          </Button>
          <Modal
            visible={visible}
            width={0.9}
            overlayOpacity={1}
            rounded
            actionsBordered
            modalAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            modalTitle={<ModalTitle title="Edit your account name" />}
            footer={(
              <ModalFooter>
                <ModalButton
                  text="CANCEL"
                  onPress={() => { setVisible(false); }}
                />
                <ModalButton
                  text="OK"
                  onPress={() => { setVisible(false); }}
                />
              </ModalFooter>
            )}
          >
            <ModalContent>
              <TextInput
                onChangeText={(text) => handleChange(text)}
                placeholder="Type here"
              />
            </ModalContent>
          </Modal>
        </View>
        <Text style={styles.interestRate}>{`current interest rate: ${interestRate}`}</Text>
      </CardItem>

      <CardItem style={styles.balance}>
        <Text style={styles.depositAmount}>{`$ ${depositAmount}`}</Text>
      </CardItem>
    </>
  );
}

AccountInfo.propTypes = {
  account: accountPropTypes.isRequired,
};
