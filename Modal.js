import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Modal} from 'react-native';

const ModalCustom = props => {
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent={true}>
      <View style={styles.centerView}>
        <View style={styles.modal}>
          <Text style={styles.textTitle}>{props.title}</Text>
          <Text style={styles.textModalContent}>{props.content}</Text>
          <View style={styles.buttonView}>
            <Pressable
              android_ripple={{
                color: '#0000001f',
                borderless: true,
                centerView: true,
              }}
              onPress={props.onPressBtn1}>
              <View style={styles.button}>
                <Text style={styles.textButton}>{props.titleBtn1}</Text>
              </View>
            </Pressable>
            <Pressable
              android_ripple={{
                color: '#0000001f',
                borderless: true,
                centerView: true,
              }}
              onPress={props.onPressBtn2}>
              <View style={styles.button}>
                <Text style={styles.textButton}>{props.titleBtn2}</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    backgroundColor: '#0000005F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: '80%',
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textModalContent: {
    alignSelf: 'stretch',
    fontSize: 18,
    textAlign: 'left',
  },
  buttonView: {
    marginTop: 30,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
  },
  textButton: {
    fontSize: 20,
    fontWeight: '700',
    color: 'blue',
  },
  textTitle: {
    alignSelf: 'stretch',
    marginBottom: 15,
    fontSize: 25,
    fontWeight: '700',
  },
});
export default ModalCustom;
