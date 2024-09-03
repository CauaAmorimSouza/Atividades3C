import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

const BalanceDisplay = ({ balance }) => {
  const LogoSantander = 'https://logos-world.net/wp-content/uploads/2020/11/Santander-Logo-2007-2018.png';
  return (
    <View style={styles.balanceContainer}>
      <Image
        style={styles.logo}
        source={{ uri: LogoSantander }}
      />
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
    </View>
  );
};

const ConfirmationModal = ({ visible, onConfirm, onCancel, amount, type }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            Você vai mesmo {type === 'deposit' ? 'depositar' : 'gastar'} R$ {amount.toFixed(2)}?
          </Text>
          <View style={styles.modalButtonContainer}>
            <View style={styles.modalButtonWrapper}>
              <Button title="Sim!" color="green" onPress={onConfirm} />
            </View>
            <View style={styles.modalButtonWrapper}>
              <Button title="Não." color="red" onPress={onCancel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const TransactionButtons = ({ onDeposit, onWithdraw }) => {
  const [amount, setAmount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [transactionType, setTransactionType] = useState(null);

  const handleConfirm = () => {
    const value = parseFloat(amount);
    if (transactionType === 'deposit') {
      onDeposit(value);
    } else if (transactionType === 'withdraw') {
      onWithdraw(value);
    }
    setModalVisible(false);
    setAmount('');
  };

  const handleDeposit = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      setTransactionType('deposit');
      setModalVisible(true);
    }
  };

  const handleWithdraw = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      setTransactionType('withdraw');
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.transactionContainer}>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Depositar" onPress={handleDeposit} color="#4CAF50" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Sacar" onPress={handleWithdraw} color="#F44336" />
        </View>
      </View>
      <ConfirmationModal
        visible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={() => setModalVisible(false)}
        amount={parseFloat(amount)}
        type={transactionType}
      />
    </View>
  );
};

const AccountScreen = () => {
  const [balance, setBalance] = useState(7320.92);

  const handleDeposit = (amount) => {
    const bonus = amount * 0.01;
    setBalance(prevBalance => prevBalance + amount + bonus);
  };

  const handleWithdraw = (amount) => {
    const penalty = balance * 0.025;
    setBalance(prevBalance => prevBalance - amount - penalty);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BalanceDisplay balance={balance} />
      <TransactionButtons onDeposit={handleDeposit} onWithdraw={handleWithdraw} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 1000,
    height: 150,
    backgroundColor: 'transparent',
    marginBottom: 30,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  balanceContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  balance: {
    fontSize: 28,
    color: '#4CAF50',
    fontWeight: '700',
  },
  transactionContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: 320,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  modalText: {
    marginBottom: 25,
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
    fontWeight: '600',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButtonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default AccountScreen;
