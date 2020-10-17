import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import MainButton from '../components/MainButton';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';
import TitleText from '../components/textStyles/TitleText';

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const numberInputHandle = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'The number must be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.text}>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandle}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 400,
    maxWidth: '80%',
    alignItems: 'center',
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    marginVertical: 15,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'open-sans',
  },
});

export default StartGameScreen;
