import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import MessagesList from '../../features/MessagesList';
import AddMessageForm from '../../features/AddMessageForm';
import RoomInfo from '../../common/RoomInfo';
import Loader from '../../common/Loader';

import useMessageForm from './useMessageForm';
import useGetMessages from './useGetMessages';

const Room = ({ route }) => {

  const { id: roomId, name, creator } = route.params;

  const {
    message,
    sending,
    handleChangeMessage,
    handleOnSubmit,
  } = useMessageForm({ roomId });

  const {
    messages,
    loading,
    handleSubcribeToMoreMessages,
  } = useGetMessages({ roomId });

  if (loading) return <Loader />;

  return ( 
    <View style={styles.container}>
      <RoomInfo 
        name={name}
        creator={creator}
      />
      <MessagesList 
        messages={messages}
        subscribeToMoreMessages={handleSubcribeToMoreMessages}
      />
      <AddMessageForm 
        value={message}
        onChangeHandler={handleChangeMessage}
        onSubmitHandler={handleOnSubmit}
      />
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