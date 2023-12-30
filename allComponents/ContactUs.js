import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ContactUs = () => {
  const [data, setData] = useState('');
  const [response, setResponse] = useState('');

  const handleFormSubmit = () => {
    setResponse('Soon you will receive a response');
    // Add logic here to handle form submission
  };

  return (
    <View style={{ flex: 1, padding: 20, }}>
      <View style={{ backgroundColor: '#1890ff', padding: 20 ,alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Contact us</Text>
        <Text style={{color: 'black', fontSize: 20, }}> If you have inquiries, feel free to reach out. Our team responds promptly to assist you.</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <TextInput
          placeholder="Your name"
          value={data}
          onChangeText={(text) => setData(text)}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Your email"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Subject"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Your message"
          multiline
          numberOfLines={4}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Button title="Submit" onPress={handleFormSubmit} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{response}</Text>
      </View>
    </View>
  );
};

export default ContactUs;
