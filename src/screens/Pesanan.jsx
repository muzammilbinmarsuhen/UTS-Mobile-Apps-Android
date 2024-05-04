import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';

const Pesanan = () => {
  const pesananData = [
    {id: '1', namaMenu: 'Nasi Goreng', harga: 25000, jumlah: 1},
    {id: '2', namaMenu: 'Kopi', harga: 10000, jumlah: 2},
    {id: '3', namaMenu: 'Pancake', harga: 20000, jumlah: 1},
    {id: '4', namaMenu: 'Soto Ayam', harga: 30000, jumlah: 1},
    {id: '5', namaMenu: 'Es Teh Manis', harga: 8000, jumlah: 2},
  ];

  // Menghitung total harga pesanan
  const totalHarga = pesananData.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0,
  );

  const [bayar, setBayar] = useState('');
  const [kembalian, setKembalian] = useState(0);

  useEffect(() => {
    const bayarInt = parseInt(bayar);
    if (!isNaN(bayarInt)) {
      setKembalian(bayarInt - totalHarga);
    }
  }, [bayar, totalHarga]);

  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.namaMenu}</Text>
      <Text style={styles.cell}>{item.harga}</Text>
      <Text style={styles.cell}>{item.jumlah}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesanan Anda</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>Menu</Text>
          <Text style={styles.header}>Harga</Text>
          <Text style={styles.header}>Jumlah</Text>
        </View>
        <FlatList
          data={pesananData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalHarga}>Rp {totalHarga}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.totalText, {flex: 1}]}>Bayar:</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputPrefix}>Rp</Text>
            <TextInput
              style={styles.input}
              value={bayar}
              onChangeText={setBayar}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Kembalian:</Text>
          <Text style={[styles.kembalian, {fontWeight: 'bold'}]}>
            {kembalian >= 0
              ? `Rp ${kembalian}`
              : 'Mohon masukkan jumlah bayar yang cukup'}
          </Text>
        </View>
        <Text style={styles.terimakasih}>Terima kasih telah memesan!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddcd2', // Background coklat susu
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4e3629', // Warna teks yang lebih gelap
  },
  table: {
    backgroundColor: '#fff', // Background putih untuk tabel
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  header: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4e3629', // Warna teks yang lebih gelap
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: '#4e3629', // Warna teks yang lebih gelap
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4e3629', // Warna teks yang lebih gelap
  },
  totalHarga: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4e3629', // Warna teks yang lebih gelap
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between', // Menambah properti justifyContent
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginLeft: 10,
    width: '50%',
  },
  inputPrefix: {
    fontSize: 16,
    marginRight: 5,
    color: '#4e3629', // Warna teks yang lebih gelap
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#4e3629', // Warna teks yang lebih gelap
  },
  kembalian: {
    fontSize: 18,
    color: '#4e3629', // Warna teks yang lebih gelap
  },
  terimakasih: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#4e3629', // Warna teks yang lebih gelap
  },
});

export default Pesanan;
