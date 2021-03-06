import React from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from './queries';

import Loader from '../../common/Loader';
import RoomLink from '../../common/RoomLink';

const Rooms = ({ navigation }) => {
  const { data, loading } = useQuery(GET_ROOMS);

  if (loading) return <Loader />;

  const { firstName, lastName } = data.usersRooms.user;

  const creator = `${firstName} ${lastName}`;

  return (
      <View>
        {
          data.usersRooms.rooms.map(room => (
            <RoomLink 
              onPressHandler={() => 
                navigation.navigate('Room',  
                  { 
                    id: room.id, 
                    name: room.name,
                    creator,
                  }
                )} 
              key={room.id}
              {...room}
            />
          ))
        }
      </View>
  )
}

export default Rooms;