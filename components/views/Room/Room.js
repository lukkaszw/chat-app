import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import MessagesList from '../../features/MessagesList';
import AddMessageForm from '../../features/AddMessageForm';
import RoomInfo from '../../common/RoomInfo';
import Loader from '../../common/Loader';

import { useQuery } from '@apollo/client';
import { GET_ROOM_MESSAGES, MESSAGE_ADDED_SUBSCRIPTION } from './queries';

import useMessageForm from './useMessageForm';

const Room = ({ route }) => {

  const { id, name, creator } = route.params;

  const {
    message,
    sending,
    handleChangeMessage,
    handleOnSubmit,
  } = useMessageForm({ roomId: id });

  const { subscribeToMore, data, loading } = useQuery(GET_ROOM_MESSAGES, {
    variables: { id },
  });

  if (loading) return <Loader />;

  return ( 
    <View style={styles.container}>
      <RoomInfo 
        name={name}
        creator={creator}
      />
      <MessagesList 
        messages={[...data.room.messages]}
        subscribeToMoreMessages={() => 
          subscribeToMore({
            document: MESSAGE_ADDED_SUBSCRIPTION,
            variables: { roomId: id },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newMessage = subscriptionData.data.messageAdded;
              return ({ 
                ...prev,
                room: {
                  ...prev.room,
                  messages: [
                    newMessage,
                    ...prev.room.messages,
                  ]
                }
              })
            }
          })
        }
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