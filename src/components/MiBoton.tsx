
import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

export default function MiBoton({
  textoBoton,
  nombreIcono,
  colorBoton,
  onPress,
}: Props) {
  const ejecutarAccion = () => {
    if (typeof onPress === 'function') {
      onPress();
    } else {
      Alert.alert('Aviso', 'No se encontró una acción para este botón.');
    }
  };

  return (
    <TouchableOpacity
      style={[
        estilos.boton,
        { backgroundColor: colorBoton },
      ]}
      onPress={ejecutarAccion}
      activeOpacity={0.6}
    >
      <Ionicons
        name={nombreIcono}
        size={22}
        color="#ffffff"
      />

      <Text style={estilos.texto}>
        {textoBoton}
      </Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 10,
    marginVertical: 6,
    gap: 10,
  },
  texto: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
