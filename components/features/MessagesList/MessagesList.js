import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';

import Message from '../../common/Message';

const windowOnStart = Dimensions.get("window").height;

const MessagesList = ({ messages }) => {

  const [windowHeight, setWindowHeight] = useState(windowOnStart);

  const onChangeWindowHeight = ({ window }) => {
    setWindowHeight(window.height);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChangeWindowHeight);
    return () => {
      Dimensions.removeEventListener("change", onChangeWindowHeight);
    };
  });

  return ( 
    <SafeAreaView style={{ 
      padding: 10,
      flex: 1,
    }}>
      <ScrollView>
          {
            messages.map(message => (
              <Message 
                key={message.id}
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