import { useQuery } from '@apollo/client';
import { GET_ROOM_MESSAGES, MESSAGE_ADDED_SUBSCRIPTION } from './queries';

const useGetMessages = ({ roomId }) => {

  const { subscribeToMore, data, loading } = useQuery(GET_ROOM_MESSAGES, {
    variables: { id: roomId },
  });

  const handleSubcribeToMoreMessages = () => subscribeToMore({
    document: MESSAGE_ADDED_SUBSCRIPTION,
    variables: { roomId },
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
  });

  const messages = loading ? [] : [...data.room.messages];

  return {
    messages,
    loading,
    handleSubcribeToMoreMessages,
  }
}

export default useGetMessages;