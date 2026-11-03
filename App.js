import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

function TarjetaPerfil({ children }) {
  return <View style={styles.tarjeta}>{children}</View>;
}

export default function App() {
  const [telefono, setTelefono] = useState('0991234567');

  const guardarCambios = () => {
    Alert.alert(
      'EcoExpress',
      '¡Tus cambios se guardaron correctamente!'
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.logo}>🌿 EcoExpress</Text>
      <Text style={styles.subtitulo}>
        Productos ecológicos a domicilio
      </Text>

      <TarjetaPerfil>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/200?img=12',
          }}
          style={styles.foto}
        />

        <Text style={styles.titulo}>Mi perfil</Text>

        <Text style={styles.etiqueta}>Nombre completo</Text>
        <Text style={styles.dato}>
          Marco Javier Zambonino Bonilla
        </Text>

        <Text style={styles.etiqueta}>
          Correo electrónico
        </Text>
        <Text style={styles.dato}>
          marco@example.com
        </Text>

        <Text style={styles.etiqueta}>
          Número de teléfono
        </Text>
        <TextInput
          style={styles.entrada}
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
          placeholder="Ingresa tu teléfono"
        />

        <TouchableOpacity
          style={styles.boton}
          onPress={guardarCambios}
        >
          <Text style={styles.textoBoton}>
            Guardar cambios
          </Text>
        </TouchableOpacity>
      </TarjetaPerfil>

      <Text style={styles.pie}>
        EcoExpress - Cuidamos el planeta
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#527B57',
    marginBottom: 30,
    textAlign: 'center',
  },
  tarjeta: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  foto: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#C8E6C9',
    marginBottom: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  etiqueta: {
    fontSize: 14,
    color: '#47764A',
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  dato: {
    fontSize: 16,
    color: '#263238',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  entrada: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#A5D6A7',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
    fontSize: 16,
    color: '#263238',
  },
  boton: {
    backgroundColor: '#2E7D32',
    padding: 15,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pie: {
    marginTop: 25,
    color: '#527B57',
    fontSize: 12,
    textAlign: 'center',
  },
});