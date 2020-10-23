import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;