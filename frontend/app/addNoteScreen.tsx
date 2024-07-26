import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, AsyncStorage } from 'react-native';

export default function AddNoteScreen() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('notes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    } catch (error) {
      console.error('Failed to load notes.', error);
    }
  };

  const saveNotes = async (newNotes) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    } catch (error) {
      console.error('Failed to save notes.', error);
    }
  };

  const handleAddNote = () => {
    if (note.trim() === '') {
      return;
    }
    const newNotes = [...notes, note];
    setNotes(newNotes);
    setNote('');
    saveNotes(newNotes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Note</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your note here..."
        value={note}
        onChangeText={setNote}
      />
      <Button title="Save Note" onPress={handleAddNote} />
      <Text style={styles.subtitle}>Your Notes</Text>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#264E36'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#264E36',
  },
  noteItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noteText: {
    fontSize: 16,
  },
});
