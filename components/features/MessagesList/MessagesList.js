import React, { useEffect, useRef } from 'react';
import { MY_USER_EMAIL } from "@env";
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Message from '../../common/Message';

const MessagesList = ({ messages, subscribeToMoreMessages }) => {

  const scrollViewRef = useRef();

  useEffect(() => {
    subscribeToMoreMessages();
  }, []);

  return ( 
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
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
  subscribeToMoreMessages: PropTypes.func.isRequired,
}

MessagesList.defaultProps = {
  messages: [],
};

const styles = StyleSheet.create({
  container: { 
    padding: 10,
    flex: 1,
  }
})

export default MessagesList;