import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState('person');

  useEffect(() => {
    setSelectedButton('person');
  }, []);

  const handleFooterButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === 'document') {
      navigation.navigate('HomeScreen');
    } else if (buttonName === 'person') {
      // Already on AccountScreen
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            // Perform logout actions here
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account Information</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text>Name : </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text>Email : </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text>Password:</Text>
          <TextInput style={styles.input} secureTextEntry />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            handleFooterButtonPress('document');
            navigation.navigate('HomeScreen');
          }}
          style={[
            styles.footerButton,
            selectedButton === 'document' && styles.footerButtonSelected,
          ]}
        >
          <Ionicons
            name="document"
            size={24}
            color={selectedButton === 'document' ? 'white' : 'gray'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFooterButtonPress('person')}
          style={[
            styles.footerButton,
            selectedButton === 'person' && styles.footerButtonSelected,
          ]}
        >
          <Ionicons name="person" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5078E1',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
  form: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  footerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerButtonSelected: {
    backgroundColor: '#5078E1',
  },
});

export default AccountScreen;
