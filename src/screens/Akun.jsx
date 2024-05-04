import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

const Akun = ({namaPengguna, nomorHandphone, fotoProfil}) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const startAnimation = () => {
    setIsButtonPressed(true);
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  });

  return (
    <Animated.ScrollView style={[styles.container, {opacity: animatedValue}]}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <View style={styles.fotoContainer}>
            {fotoProfil ? (
              <Image source={fotoProfil} style={styles.fotoProfil} />
            ) : (
              <View style={styles.placeholder} />
            )}
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.infoLabel}>Nama Pengguna:</Text>
            <Text style={styles.infoText}>{namaPengguna}</Text>
            <Text style={styles.infoLabel}>Nomor Handphone:</Text>
            <Text style={styles.infoText}>{nomorHandphone}</Text>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={startAnimation} style={styles.menuItem}>
          <Text
            style={[
              styles.menuText,
              isButtonPressed && styles.menuTextPressed,
            ]}>
            Pesanan Saya
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={startAnimation} style={styles.menuItem}>
          <Text
            style={[
              styles.menuText,
              isButtonPressed && styles.menuTextPressed,
            ]}>
            Favorit Saya
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={startAnimation} style={styles.menuItem}>
          <Text
            style={[
              styles.menuText,
              isButtonPressed && styles.menuTextPressed,
            ]}>
            Alamat Pengiriman
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={startAnimation} style={styles.menuItem}>
          <Text
            style={[
              styles.menuText,
              isButtonPressed && styles.menuTextPressed,
            ]}>
            Pengaturan Akun
          </Text>
        </TouchableOpacity>
      </View>
      {/* Tambahkan tombol aksi di sini */}
      <TouchableOpacity
        style={[styles.actionButton, {backgroundColor: '##4CAF50'}]}>
        <Text style={styles.actionButtonText}>Keluar</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddcd2', // Warna latar belakang coklat susu
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fotoContainer: {
    marginRight: 20,
  },
  fotoProfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1877f2', // Warna border gambar
  },
  placeholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  userInfo: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  menu: {
    paddingVertical: 20,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff', // Warna coklat susu
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  menuTextPressed: {
    color: '#1877f2',
    fontWeight: 'bold', // Tambahkan ketebalan teks saat ditekan
  },
  actionButton: {
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    elevation: 3, // Tambahkan efek elevasi
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Akun;
