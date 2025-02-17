import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'other';
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: '코드 확인해 보시고 수정이 필요하시면 말씀부탁드립니다 😊', sender: 'other' },
    { id: '2', text: '오호 압압앱', sender: 'me' },
  ]);

  const sendMessage = (text: string) => {
    setMessages([...messages, { id: Date.now().toString(), text, sender: 'me' }]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatBubble message={item} />}
        keyExtractor={(item) => item.id}
        inverted
      />
      <ChatInput onSendMessage={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default ChatScreen;