import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import BodyText from '../components/textStyles/BodyText';
import TitleText from '../components/textStyles/TitleText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = ({ roundNumber, userNumber, startNewGame }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.screen}>
        <TitleText
          style={{
            fontSize: Dimensions.get('window').height < 600 ? 20 : 26,
          }}
        >
          The Game is Over!
        </TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://drjasonjones.com/wp-content/uploads/2017/06/Success-Mountain-Web.jpeg',
            }}
            //source={require('../assets/success.png')} -- for local images
            fadeDuration={400} // this fadein animation is made automatically by RN, and by default is 300ms
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={startNewGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 40, // 2.5% of the height
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 600 ? 16 : 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
  textContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 40,
  },
});

export default GameOverScreen;
