
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>Formación Académica</Text>
        <Text style={estilos.descripcion}>
          Mi trayectoria educativa y formación profesional.
        </Text>
      </View>

      <TarjetaEstudio
        titulo="Análisis y Desarrollo de Software (ADSO)"
        institucion="Servicio Nacional de Aprendizaje - SENA"
        anio={2026}
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Bachillerato Académico"
        institucion="Gerardo Paredes Martinez"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Educación Básica"
        institucion="Gerardo Paredes Martinez"
        anio={2019}
        enCurso={false}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contenido: {
    padding: 20,
  },
  encabezado: {
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 15,
    color: '#475569',
  },
});
