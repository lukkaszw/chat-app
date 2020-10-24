import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import useMessageForm from './useMessageForm';

const AddMessageForm = () => {

  const {
    message,
    handleChangeMessage,
  } = useMessageForm();

  return ( 
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        autoFocus={false}
        onChangeText={handleChangeMessage}
      />
      <Button 
        title='Send'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 36,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  }
});
 
export default AddMessageForm;