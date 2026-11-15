
import { View, Text, StyleSheet } from 'react-native';

export default function Hobbies() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mis Hobbies</Text>
      <Text>Mis intereses y actividades favoritas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 10,
  },
});
