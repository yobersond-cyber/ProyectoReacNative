
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>
          Experiencia Laboral
        </Text>

        <Text style={estilos.subtitulo}>
          Mi experiencia y proyectos realizados.
        </Text>
      </View>

      <TarjetaExperiencia
        cargo="Aprendiz de Desarrollo de Software"
        empresa="Proyecto académico - SENA"
        periodo="2026 - Actualidad"
        descripcion="Desarrollo de aplicaciones web y móviles, creación de interfaces, programación y manejo de bases de datos como parte de mi formación en ADSO."
      />

      <TarjetaExperiencia
        cargo="Desarrollador de proyecto académico"
        empresa="Proyecto APRENZY"
        periodo="2026"
        descripcion="Participación en el desarrollo de una plataforma educativa, trabajando en funcionalidades para estudiantes, docentes, coordinadores y administradores."
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
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: '#475569',
  },
});
