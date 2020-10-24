import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  {
    usersRooms {
      user {
        firstName
        lastName
      }
      rooms {
        id
        name
      }
    }
  }
`;