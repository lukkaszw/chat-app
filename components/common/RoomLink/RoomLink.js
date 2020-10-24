import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const RoomLink = ({ name, id, onPressHandler }) => {
  return ( 
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPressHandler}
      >
        <Text
          style={styles.text}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

RoomLink.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onPressHandler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    fontSize: 14,
    backgroundColor: '#222',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
  }
});
 
export default RoomLink;