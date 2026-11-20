import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type TodoInputProps = {
  onAddTodo: (title: string) => void;
};

export function TodoInput({ onAddTodo }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSave = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    onAddTodo(trimmed);
    setText('');
  };

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSave}
        returnKeyType="done"
      />
      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 16,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#1f6feb',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});