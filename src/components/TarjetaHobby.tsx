
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  nombre: string;
  descripcion: string;
  detalle: string;
  icono: string;
};

export default function TarjetaHobby({
  nombre,
  descripcion,
  detalle,
  icono,
}: Props) {
  const mostrarDetalle = () => {
    if (Platform.OS === 'web') {
      window.alert(`${nombre}\n\n${detalle}`);
    } else {
      Alert.alert(nombre, detalle);
    }
  };

  return (
    <TouchableOpacity
      style={estilos.tarjeta}
      onPress={mostrarDetalle}
      activeOpacity={0.8}
    >
      <View style={estilos.iconoContenedor}>
        <Text style={estilos.icono}>{icono}</Text>
      </View>

      <View style={estilos.informacion}>
        <Text style={estilos.nombre}>{nombre}</Text>

        <Text style={estilos.descripcion}>
          {descripcion}
        </Text>

        <Text style={estilos.indicacion}>
          Toca para conocer más
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
    elevation: 2,
  },
  iconoContenedor: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#ede9fe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  icono: {
    fontSize: 28,
  },
  informacion: {
    flex: 1,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 14,
    color: '#475569',
  },
  indicacion: {
    fontSize: 12,
    color: '#7c3aed',
    marginTop: 7,
    fontWeight: '600',
  },
});
