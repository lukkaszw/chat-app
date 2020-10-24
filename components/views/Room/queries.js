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
          id
          email
        }
      }
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation SendMessage($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      body
      id
      insertedAt
      user {
        id
      }
    }
  }
`;