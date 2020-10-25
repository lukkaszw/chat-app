import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text } from 'react-native';

const Message = ({ body, user, insertedAt, isOwn }) => {

  const { firstName, lastName } = user;

  return ( 
    <View style={styles.container}>
      <View style={[styles.messageBody, isOwn && styles.ownMessageBody]}>
        {
          !isOwn &&
          <View>
            <Text style={styles.user}>
              {firstName} {lastName}
            </Text> 
          </View>
        }
        <View>
          <Text style={[styles.message, isOwn && styles.white]}>
            {body}
          </Text>
          <Text style={[styles.date, isOwn && styles.white]}>
            {insertedAt}
          </Text>
        </View>
      </View>
    </View>
  );
}

Message.propTypes = {
  user: PropTypes.object.isRequired,
  insertedAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  isOwn: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageBody: {
    marginRight: 'auto',
    textAlign: 'left',
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },
  ownMessageBody: {
    marginRight: 0,
    textAlign: 'right',
    marginLeft: 'auto',
    backgroundColor: '#06c',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 14,
  },  
  user: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  message: {
    fontSize: 14,
  },
  date: {
    fontSize: 10,
  },
  white: {
    color: '#fff',
  }
});
 
export default Message;