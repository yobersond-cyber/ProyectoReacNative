
import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MiBoton from '../components/MiBoton';

const inicio = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      {/* Datos personales */}
      <View style={estilos.avatarContenedor}>
        <Ionicons
          name="person-circle"
          size={100}
          color="#2563eb"
        />

        <Text style={estilos.nombre}>
          Yoberson David Diaz Romero
        </Text>

        <Text style={estilos.profesion}>
          Aprendiz de Análisis y Desarrollo de Software (ADSO)
        </Text>
      </View>

      {/* Perfil profesional */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>
          Perfil Profesional
        </Text>

        <Text style={estilos.parrafo}>
          Aprendiz del SENA interesado en el desarrollo de
          aplicaciones móviles y web, programación y bases
          de datos.
        </Text>
      </View>

      {/* Información de contacto */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>
          Contacto
        </Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E86D64"
          onPress={() =>
            Alert.alert(
              'Contacto',
              'Correo: yobersond@gmail.com'
            )
          }
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#16A34A"
          onPress={() =>
            Alert.alert(
              'Contacto',
              'Teléfono: 3143543522'
            )
          }
        />

        <MiBoton
          textoBoton="LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#2563EB"
          onPress={() =>
            Alert.alert(
              'LinkedIn',
              'Actualmente no tengo perfil de LinkedIn.'
            )
          }
        />
      </View>
    </ScrollView>
  );
};

export default inicio;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  contenido: {
    padding: 20,
  },

  avatarContenedor: {
    alignItems: 'center',
    marginBottom: 20,
  },

  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 8,
    textAlign: 'center',
  },

  profesion: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },

  seccion: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },

  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },

  parrafo: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});
