
import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MiBoton from '../components/MiBoton';

const mostrarAlerta = (titulo: string, mensaje: string) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

export default function Inicio() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
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

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E86D64"
          onPress={() =>
            mostrarAlerta(
              'Contacto por correo',
              'Correo: yobersond@gmail.com'
            )
          }
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#16A34A"
          onPress={() =>
            mostrarAlerta(
              'Contacto telefónico',
              'Teléfono: 3143543522'
            )
          }
        />

        <MiBoton
          textoBoton="Repositorio Git"
          nombreIcono="logo-github"
          colorBoton="#171717"
          onPress={() =>
            mostrarAlerta(
              'Repositorio Git',
              'Aquí puedes consultar mis proyectos y trabajos de programación. Agrega tu enlace de GitHub cuando lo tengas.'
            )
          }
        />
      </View>
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
