import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './TaskItemStyle';

export default function TaskItem(props) {
  const [editando, setEditando] = useState(false);
  const [novoTexto, setNovoTexto] = useState(props.task.text);

  return (
    <View style={styles.item}>
      {editando ? (
        <TextInput
          value={novoTexto}
          onChangeText={setNovoTexto}
          style={styles.input}
          autoFocus
        />
      ) : (
        <Text style={styles.text}>{props.task.text}</Text>
      )}
      <View style={styles.actions}>
        {editando ? (
          <TouchableOpacity
            onPress={() => {
              props.onEdit(props.task.id, novoTexto);
              setEditando(false);
            }}
            style={styles.actionsButton}
          >
            <Ionicons name="checkmark" size={20} color="green" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setEditando(true)}
            style={styles.actionsButton}
          >
            <Ionicons name="pencil" size={20} color="#000" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => props.onDelete(props.task.id)}>
          <Ionicons name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
