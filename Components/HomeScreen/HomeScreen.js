import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState('document');

  useEffect(() => {
    setSelectedButton('document');
  }, []);

  const handleFooterButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === 'document') {
      // Navigation to Document Screen or functionality
    } else if (buttonName === 'person') {
      navigation.navigate('AccountScreen');
    }
  };

  const sheets = [
    { id: '1', title: 'Sheet 1', date: 'Tanggal' },
    { id: '2', title: 'Sheet 2', date: 'Tanggal' },
    { id: '3', title: 'Sheet 3', date: 'Tanggal' },
  ];

  const renderSheet = ({ item }) => (
    <View style={styles.sheetContainer}>
      <Text style={styles.sheetTitle}>{item.title}</Text>
      <Text style={styles.sheetDate}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EasySheet</Text>
        <TouchableOpacity onPress={() => alert('Tambahkan Sheet!')}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={sheets}
        renderItem={renderSheet}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => handleFooterButtonPress('document')}
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
          <Ionicons
            name="person"
            size={24}
            color={selectedButton === 'person' ? 'white' : 'gray'}
          />
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
  content: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  sheetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  sheetTitle: {
    fontSize: 16,
  },
  sheetDate: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
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

export default HomeScreen;
