import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddMessageForm = ({ 
  value,
  onChangeHandler,
  onSubmitHandler,
}) => {

  return ( 
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        value={value}
        onChangeText={onChangeHandler}
      />
      <Button 
        title='Send'
        onPress={onSubmitHandler}
      />
    </View>
  );
}

AddMessageForm.propTypes = {
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

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