import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text } from 'react-native';

const RoomInfo = ({ name, creator }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.creator}>
        Created by {creator}
      </Text>
    </View> 

  );
}

RoomInfo.propTypes = {
  name: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },  
  name: {
    fontSize: 14,
    color: '#222',
    fontWeight: '600',
  },
  creator: {
    fontSize: 10,
    color: '#aaa',
  }
});
 
export default RoomInfo;