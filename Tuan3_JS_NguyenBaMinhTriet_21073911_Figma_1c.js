import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

//Tuần 3_Nguyễn Bá Minh Triết_21073911_Figma_1c


const VerificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.codeText}>CODE</Text>
      <Text style={styles.verificationText}>VERIFICATION</Text>
      <Text style={styles.infoText}>
        Enter ontime password sent on {'\n'} ++849092605798
      </Text>

      {/* Tạo các ô nhập liệu tĩnh không có logic */}
      <View style={styles.otpContainer}>
        <TextInput style={styles.otpInput} editable={false} />
        <TextInput style={styles.otpInput} editable={false} />
        <TextInput style={styles.otpInput} editable={false} />
        <TextInput style={styles.otpInput} editable={false} />
        <TextInput style={styles.otpInput} editable={false} />
        <TextInput style={styles.otpInput} editable={false} />
      </View>

      {/* Nút xác minh */}
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  codeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  verificationText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#FFCC00', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default VerificationScreen;
