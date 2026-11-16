
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>
          Mis Hobbies
        </Text>

        <Text style={estilos.subtitulo}>
          Actividades que disfruto realizar en mi tiempo libre.
        </Text>
      </View>

      <TarjetaHobby
        nombre="Programación"
        descripcion="Aprender nuevas tecnologías y desarrollar proyectos."
        detalle="Me gusta aprender lenguajes de programación, crear aplicaciones y mejorar mis habilidades como desarrollador."
        icono="💻"
      />

      <TarjetaHobby
        nombre="Tecnología"
        descripcion="Conocer herramientas y avances tecnológicos."
        detalle="Disfruto explorar nuevas herramientas, aplicaciones y tecnologías que aportan soluciones a diferentes necesidades."
        icono="🚀"
      />

      <TarjetaHobby
        nombre="Música"
        descripcion="Escuchar música en mi tiempo libre."
        detalle="La música es una de las actividades que disfruto para relajarme y acompañar mis actividades diarias."
        icono="🎵"
      />

      <TarjetaHobby
        nombre="Deporte"
        descripcion="Jugar a el futbol y seguir creciendo en mi esatdo fisico."
        detalle="Me interesa jugar futbol y llevarlo mas alla de un hobby verlo como profesional."
        icono="⚽"
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
