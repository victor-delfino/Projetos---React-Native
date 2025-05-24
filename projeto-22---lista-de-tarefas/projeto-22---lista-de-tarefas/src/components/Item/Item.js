import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ItemStyle';

export default function Item(props) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.item.name);
  const [newQuantity, setNewQuantity] = useState(props.item.quantity);

  return (
    <View style={styles.item}>
      {editing ? (
        <>
          <TextInput
            value={newName}
            onChangeText={setNewName}
            style={styles.input}
            autoFocus
          />
          <TextInput
            value={newQuantity}
            onChangeText={setNewQuantity}
            style={styles.input}
            keyboardType="numeric"
          />
        </>
      ) : (
        <Text style={styles.text}>
          {props.item.name} ({props.item.quantity})
        </Text>
      )}
      <View style={styles.actions}>
        {editing ? (
          <TouchableOpacity
            onPress={() => {
              props.onEdit(props.item.id, { name: newName, quantity: newQuantity });
              setEditing(false);
            }}
            style={styles.actionsButton}
          >
            <Ionicons name="checkmark" size={20} color="green" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setEditing(true)} style={styles.actionsButton}>
            <Ionicons name="pencil" size={20} color="#000" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => props.onDelete(props.item.id)}>
          <Ionicons name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
