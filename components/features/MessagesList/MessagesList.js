import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';

import Message from '../../common/Message';

const MessagesList = ({ messages }) => {

  const maxHeight = Dimensions.get('window').height - 141;

  return ( 
    <View style={{ 
      padding: 10,
      height: maxHeight,
      minHeight: maxHeight,
      maxHeight: maxHeight, 
      overflow: 'scroll', 
      display: 'flex', 
      flexDirection: 'column-reverse',
    }}>
        {
          messages.reverse().map(message => (
            <Message 
              key={message.id}
              {...message}
            />
          ))
        }
    </View>
  );
}
 
MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
}

MessagesList.defaultProps = {
  messages: [],
};

export default MessagesList;