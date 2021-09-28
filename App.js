import {typeAlias} from '@babel/types';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
  ToastAndroid,
  Modal,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import MashButton from './Button';
import ModalCustom from './Modal';

const App = () => {
  const [counter, setCounter] = useState(6);
  const [tempCounter, setTempCounter] = useState(6);
  const [warning, setShowWarning] = useState(false);
  const onClickIncrease = () => {
    setCounter(counter + 1);
    ToastAndroid.show('Increased', ToastAndroid.SHORT);
  };
  const onClickDecrease = () => {
    setCounter(counter - 1);
    ToastAndroid.show('Decreased', ToastAndroid.SHORT);
  };
  const onConfirmInitialNumber = () => {
    // Alert.alert('Warning', 'Are you sure to change counter?', [
    //   {
    //     text: 'OK',
    //     onPress: () => {
    //       setCounter(tempCounter);
    //       console.warn('The counter is changed.');
    //     },
    //   },
    //   {
    //     text: 'Cancel',
    //     onPress: () => {},
    //   },
    // ]);
    setShowWarning(true);
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={require('./assets/image-background.jpg')}>
      <View style={styles.body}>
        <ModalCustom
          visible={warning}
          title="Are you sure"
          content="Are you sure to change the counter value"
          titleBtn1="Cancel"
          titleBtn2="OK"
          onRequestClose={() => setShowWarning(false)}
          onPressBtn1={() => setShowWarning(false)}
          onPressBtn2={() => {
            setShowWarning(false);
            setCounter(tempCounter);
            console.warn('The counter is changed.');
          }}
        />
        <View style={{flex: 7, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{height: 30}}></View>
          <TextInput
            placeholder="Please input the initial number"
            placeholderTextColor="white"
            style={styles.txtInput}
            keyboardType="numeric"
            onChangeText={value => setTempCounter(parseInt(value))}></TextInput>
          <View style={{height: 30}}></View>
          {/* <Pressable
          style={({pressed}) => [
            styles.button,
            {backgroundColor: pressed ? '#311b92' : '#6200ea'},
          ]}
          onPress={onConfirmInitialNumber}>
          <Text style={[styles.txtBtn, {color: 'white'}]}>Confirm </Text>
        </Pressable> */}

          <MashButton
            onClick={onConfirmInitialNumber}
            title="Confirm"
            textColor="white"
            style={{backgroundColor: '#6200ea'}}
          />
          <View style={{height: 10}}></View>
        </View>

        <Text style={styles.text}>Current number is: </Text>
        <Text style={[styles.text, {flex: 2, fontSize: 50}]}> {counter} </Text>
        <View style={{flex: 8, justifyContent: 'center'}}>
          {/* <Pressable style={styles.button} onPress={onClickIncrease}>
          <Text style={styles.txtBtn}> Increase</Text>
        </Pressable> */}
          <MashButton
            onClick={onClickIncrease}
            title="Increase"
            textColor="white"
            style={{backgroundColor: '#6200ea'}}
          />

          <View style={{height: 30}}></View>
          <MashButton
            onClick={onClickDecrease}
            title="Decrease"
            textColor="white"
            style={{backgroundColor: '#6200ea'}}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    color: 'white',
    fontSize: 32,
    textAlignVertical: 'center',
  },
  button: {
    width: 240,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    color: 'black',
    fontSize: 28,
    fontWeight: '700',
  },
  txtInputNumber: {
    textAlignVertical: 'center',
    fontSize: 22,
  },
  txtInput: {
    padding: 20,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
  },
  image: {
    flex: 1,
  },
});
export default App;
