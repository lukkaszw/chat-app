import { gql } from '@apollo/client';

export const GET_ROOM_MESSAGES = gql`
  query GetRoomsMessage($id: ID!) {
    room (id: $id) {
      id
      messages {
        body
        id
        insertedAt
        user {
          firstName
          lastName
        }
      }
    }
  }
`;