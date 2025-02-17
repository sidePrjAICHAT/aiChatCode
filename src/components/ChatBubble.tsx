import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ChatBubbleProps {
  message: {
    text: string;
    sender: 'me' | 'other';
  };
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isMyMessage = message.sender === 'me';

  return (
    <View style={[styles.container, isMyMessage ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '75%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#ffcc00',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#303030',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default ChatBubble;