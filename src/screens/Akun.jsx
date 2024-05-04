import React, {useRef} from 'react';
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
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {fotoProfil && <Image source={fotoProfil} style={styles.fotoProfil} />}
        <Text style={styles.username}>{namaPengguna}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.textInfo}>{email}</Text>
      </View>
      <TouchableOpacity onPress={startAnimation} style={styles.table}>
        <Animated.View style={[styles.tableItem, {transform: [{translateX}]}]}>
          <Text style={styles.tableText}>Alamat</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={startAnimation} style={styles.table}>
        <Animated.View style={[styles.tableItem, {transform: [{translateX}]}]}>
          <Text style={styles.tableText}>Pembayaran</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={startAnimation} style={styles.table}>
        <Animated.View style={[styles.tableItem, {transform: [{translateX}]}]}>
          <Text style={styles.tableText}>Pusat Bantuan</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={startAnimation} style={styles.table}>
        <Animated.View style={[styles.tableItem, {transform: [{translateX}]}]}>
          <Text style={styles.tableText}>Pengaturan</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={startAnimation} style={styles.table}>
        <Animated.View style={[styles.tableItem, {transform: [{translateX}]}]}>
          <Text style={styles.tableText}>Panduan</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={startAnimation} style={styles.table}>
        <Animated.View style={[styles.tableItem, {transform: [{translateX}]}]}>
          <Text style={styles.tableText}>Kebijakan Privasi</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={startAnimation} style={styles.table}>
        <Animated.View style={[styles.tableItem, {transform: [{translateX}]}]}>
          <Text style={styles.tableText}>Media Sosial</Text>
        </Animated.View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    color: '#1877f2',
  },
  info: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInfo: {
    fontSize: 16,
  },
  table: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableItem: {
    paddingVertical: 15,
    paddingLeft: 10,
    backgroundColor: '#f7f7f7',
  },
  tableText: {
    fontSize: 20,
    color: '#333',
  },
});

export default Akun;
