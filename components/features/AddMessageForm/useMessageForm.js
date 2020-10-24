import { useState, useCallback } from 'react';

const useMessageForm = () => {
  const [message, setMessage] = useState('');

  const handleChangeMessage = useCallback((text) => setMessage(text), [setMessage]);

  return {
    message,
    handleChangeMessage,
  }
}

export default useMessageForm;