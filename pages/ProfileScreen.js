// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const SettingsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
      <View style={{flexDirection:'row', paddingTop:10,justifyContent: 'center'}}>
        <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              justifyContent: 'center',
              padding: 10,
              fontWeight:'bold',
            }}>
            Profil
        </Text>

        <Image source={require('../assets/Info.png')} style={{width:20, height:20, alignItems:'flex-end'}} />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
          <Image source={require('../assets/profile.png')} style={{width:120, height:120}} />
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              padding: 10,
            }}>
            Ferdi Sambo
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              opacity: 0.5,
            }}>
            ferdisambo@guru.sma.co.id
          </Text>
          

          <View style={styles.main2}>
            <View style={{flexDirection:'row', paddingTop:10,}}>
              <View style={styles.bg}>
               <TouchableOpacity
               style={styles.button} onPress={() => navigation.navigate('InformasiAkun')}>
               <Text>Data Pengguna</Text>
           
               
               </TouchableOpacity>
              </View>
              <Image style={{width:14, height:14, marginRight:30}} source={require('../assets/direct.png')} />
           </View>

            <View style={{flexDirection:'row', paddingTop:10,}}>
              <View style={styles.bg}>
               <TouchableOpacity
               style={styles.button} onPress={() => navigation.navigate('GantiPasswordScreen')}>
               <Text>Ganti Password</Text>
          
               </TouchableOpacity>
              </View>
              <Image style={{width:14, height:14, marginRight:30}} source={require('../assets/direct.png')} />
           </View>

            <View style={{flexDirection:'row', paddingTop:10,}}>
              <View style={styles.bg}>
               <TouchableOpacity
               style={styles.button} onPress={() => navigation.navigate('PengaturanScreen')}>
               <Text>Pengaturan</Text>
            
               </TouchableOpacity>
              </View>
              <Image style={{width:14, height:14, marginRight:30}} source={require('../assets/direct.png')} />
           </View>
          </View>

          
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Pengaturan')}>
            <Text style={{color:'white'}}>Keluar</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#61B0B7',
    padding: 10,
    width: 200,
    height: 40,
    marginTop: 16,
    borderRadius:50,
    color:'white'
  },
  main2:{
    backgroundColor:'white',
    marginLeft:10,
    marginTop:10,
    borderRadius: 15,
    borderWidth:2,
    borderColor:'white',
    marginRight:10,
    
  },
  bg:{
    backgroundColor: 'white',
    width: 200,
    height: 50,
    alignItems:'center',
    marginLeft:20
    },
});
export default SettingsScreen;
