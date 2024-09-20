import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//Tuần 3_Nguyễn Bá Minh Triết_21073911_Figma_2a

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Icon name="person" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#000"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-closed" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry
        />
        <Icon name="eye" size={24} color="black" style={styles.icon} />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </View>

      <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    padding: 20,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0e68c',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountText: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
