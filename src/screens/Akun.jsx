import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Akun = ({ namaPengguna, email, fotoProfil }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {fotoProfil && <Image source={fotoProfil} style={styles.fotoProfil} />}
        <Text style={styles.username}>{namaPengguna}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.textInfo}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f5', // Warna latar biru muda ala Facebook
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  fotoProfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1877f2', // Warna biru Facebook
  },
  info: {},
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInfo: {
    fontSize: 16,
  },
});

export default Akun;
