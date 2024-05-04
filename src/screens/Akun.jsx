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

const Akun = ({namaPengguna, email, fotoProfil}) => {
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
        {fotoProfil ? (
          <Image source={fotoProfil} style={styles.fotoProfil} />
        ) : (
          <View style={styles.placeholder} />
        )}
        <View style={styles.userInfo}>
          <Text style={styles.username}>{namaPengguna}</Text>
          <Text style={styles.email}>{email}</Text>
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
      <TouchableOpacity style={styles.actionButton}>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  fotoProfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
    borderWidth: 2,
    borderColor: '#1877f2', // Warna border gambar
  },
  placeholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
    backgroundColor: '#ccc',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Warna nama pengguna
  },
  email: {
    fontSize: 14,
    color: '#888',
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
  },
  actionButton: {
    backgroundColor: '#1877f2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Akun;