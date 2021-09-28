import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const MashButton = props => {
  return (
    <Pressable
      style={[props.style, styles.button]}
      android_ripple={{color: '#ffffffdd', radius: 1}}
      hitSlop={{top: 15, bottom: 15, right: 15, left: 15}}
      onPress={props.onClick}>
      <Text style={[styles.txtBtn, {color: props.textColor}]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  txtBtn: {
    color: 'black',
    fontSize: 28,
    fontWeight: '700',
  },
  button: {
    width: 240,
    height: 60,
    borderRadius: 30,
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MashButton;
