import React from 'react';
import { MY_USER_EMAIL } from "@env";
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView } from 'react-native';

import Message from '../../common/Message';

const MessagesList = ({ messages }) => {

  return ( 
    <SafeAreaView style={{ 
      padding: 10,
      flex: 1,
    }}>
      <ScrollView>
          {
            messages.reverse().map(message => (
              <Message 
                key={message.id}
                isOwn={message.user.email === MY_USER_EMAIL}
                {...message}
              />
            ))
          }
      </ScrollView>
    </SafeAreaView>
  );
}
 
MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
}

MessagesList.defaultProps = {
  messages: [],
};

export default MessagesList;