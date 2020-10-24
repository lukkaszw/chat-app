import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Room = ({ route }) => {

  const { id } = route.params;

  return ( 
    <View>
    </View>
  );
}

Room.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Room;