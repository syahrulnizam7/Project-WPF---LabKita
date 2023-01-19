import * as React from 'react';
import {Text, View, StyleSheet, Image,ScrollView,Button} from 'react-native';
import {Latar,Putih,Abu,Hijau} from './Warna'
export default function History(){
return (
<ScrollView style={{flex:1}}>
<View style={styles.main}>
<Image source={require('../assets/logo.png')} style={{marginLeft:20,marginTop:20, width:50,height:50}}/>
<Image source={require('../assets/top_nav.png')} style={{marginLeft:270,marginTop:-55, width:45,height:45}}/>
<View style={styles.card1}>
<Image source={require('../assets/g1.png')} style={{marginLeft:-10,width:80,height:80}}/>
<Text style={{marginTop:-75,marginLeft:70,fontSize:22}}>Lab Kimia 1</Text>
<Text style={{marginLeft:70,fontSize:12,color:Abu}}>Senin / 19 Nov 2022</Text>
<Text style={{marginLeft:70,fontSize:16,color:Hijau}}>07.30 - 10.00</Text>
<Button title="Dibatalkan" style={{marginLeft:175,marginTop:-20, fontSize:15,backgroundColor:Hijau, borderRadius:5,borderWidth:0}}></Button>
</View>
<View style={styles.card}>
<Image source={require('../assets/g2.png')} style={{marginLeft:-10,width:80,height:80}}/>
<Text style={{marginTop:-75,marginLeft:70,fontSize:22}}>Lab Fisika 2</Text>
<Text style={{marginLeft:70,fontSize:12,color:Abu}}>Senin / 19 Nov 2022</Text>
<Text style={{marginLeft:70,fontSize:16,color:Hijau}}>07.30 - 10.00</Text>
        <Button title="Dikonfirmasi" style={{marginLeft:175,marginTop:-20, fontSize:15,backgroundColor:Hijau, borderRadius:5,borderWidth:0}}></Button>
    </View>
      <View style={styles.card}>
        <Image source={require('../assets/g3.png')} style={{marginLeft:-10,width:80,height:80}}/>
<Text style={{marginTop:-75,marginLeft:70,fontSize:22}}>Lab Biologi 1</Text>
<Text style={{marginLeft:70,fontSize:12,color:Abu}}>Senin / 19 Nov 2022</Text>
<Text style={{marginLeft:70,fontSize:16,color:Hijau}}>07.30 - 10.00</Text>
        <Button title="Diproses" style={{marginLeft:175,marginTop:-20, fontSize:15,backgroundColor:Hijau, borderRadius:5,borderWidth:0}}></Button>
    </View>
      <View style={styles.card}>
        <Image source={require('../assets/g4.png')} style={{marginLeft:-8,width:70,height:80}}/>
<Text style={{marginTop:-75,marginLeft:70,fontSize:22}}>Lab Komputer 1</Text>
<Text style={{marginLeft:70,fontSize:12,color:Abu}}>Senin / 19 Nov 2022</Text>
<Text style={{marginLeft:70,fontSize:16,color:Hijau}}>07.30 - 10.00</Text>
        <Button title="Selesai" style={{marginLeft:175,marginTop:-20, fontSize:15,backgroundColor:Hijau, borderRadius:5,borderWidth:0}}></Button>
    </View>
    <View style={styles.card}>
        <Image source={require('../assets/g5.png')} style={{marginLeft:-8,width:70,height:80}}/>
<Text style={{marginTop:-75,marginLeft:70,fontSize:22}}>Lab Kimia 2</Text>
<Text style={{marginLeft:70,fontSize:12,color:Abu}}>Senin / 19 Nov 2022</Text>
<Text style={{marginLeft:70,fontSize:16,color:Hijau}}>07.30 - 10.00</Text>
        <Button title="Dikonfirmasi" style={{ marginLeft:175,marginTop:-20, fontSize:15,backgroundColor:Hijau, borderRadius:5,borderWidth:0}}></Button>
    </View>
  </View>
  </ScrollView>
  );
  }
const styles = StyleSheet.create({
main:{
    height:800,
    position:'relative',
  },
   card:{
    backgroundColor:Putih,
    borderRadius:15,
    marginTop:10,
    alignSelf:'center',
    width:300,
    height:112,
    padding:16,
  },
  card1:{
    backgroundColor:Putih,
    borderRadius:15,
    marginTop:40,
    alignSelf:'center',
    width:300,
    height:112,
    padding:16,
  },
});