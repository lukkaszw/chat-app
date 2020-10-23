import React from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from './queries';

import Loader from '../../common/Loader';

const Rooms = () => {
  const { data, loading } = useQuery(GET_ROOMS);

  if (loading) return <Loader />;

  return (
      <Text>
        {
          JSON.stringify(data)
        }
      </Text>
  )
}

export default Rooms;