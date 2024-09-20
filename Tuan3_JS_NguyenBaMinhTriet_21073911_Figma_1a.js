import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

//Tuần 3_Nguyễn Bá Minh Triết_21073911_Figma_1a



const ForgetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
      </View>

      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.subtitle}>
        Provide your account's email for which you want to reset your password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Button title="NEXT" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E0F7FF', 
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'black',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default ForgetPasswordScreen;