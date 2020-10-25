import { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MESSAGE } from './queries';

const useMessageForm = ({ roomId }) => {
  const [message, setMessage] = useState('');
  const handleChangeMessage = useCallback((text) => setMessage(text), [setMessage]);

  const [sendMessage, { loading }] = useMutation(ADD_MESSAGE);

  const handleOnSubmit = useCallback(() => {
    if(message.length === 0) {
      return;
    }
    
    sendMessage({
      variables: {
        body: message,
        roomId
      }
    });
    setMessage('');
  });

  return {
    message,
    sending: loading,
    handleChangeMessage,
    handleOnSubmit,
  }
}

export default useMessageForm;