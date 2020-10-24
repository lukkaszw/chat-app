import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import MessagesList from '../../features/MessagesList';
import AddMessageForm from '../../features/AddMessageForm';
import RoomInfo from '../../common/RoomInfo';
import Loader from '../../common/Loader';

import { useQuery } from '@apollo/client';
import { GET_ROOM_MESSAGES } from './queries';

const Room = ({ route }) => {

  const { id, name, creator } = route.params;

  const { data, loading } = useQuery(GET_ROOM_MESSAGES, {
    variables: { id },
  });

  if (loading) return <Loader />;

  return ( 
    <View style={styles.container}>
      <RoomInfo 
        name={name}
        creator={creator}
      />
      <MessagesList messages={data.room.messages}/>
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