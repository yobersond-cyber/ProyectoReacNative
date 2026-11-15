
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.cargo}>{cargo}</Text>

      <Text style={estilos.empresa}>{empresa}</Text>

      <Text style={estilos.periodo}>{periodo}</Text>

      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#2563eb',
    elevation: 2,
  },
  cargo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  empresa: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563eb',
    marginBottom: 5,
  },
  periodo: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 21,
  },
});
