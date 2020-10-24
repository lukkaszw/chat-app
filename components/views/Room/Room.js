import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import MessagesList from '../../features/MessagesList';
import AddMessageForm from '../../features/AddMessageForm';
import RoomInfo from '../../common/RoomInfo';

const Room = ({ route }) => {

  const { id, name, creator } = route.params;



  return ( 
    <View style={styles.container}>
      <RoomInfo 
        name={name}
        creator={creator}
      />
      <MessagesList />
      <AddMessageForm />
    </View>
  );
}

Room.propTypes = {
  route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    height: '100%',
  }
})

export default Room;