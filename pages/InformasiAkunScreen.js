import React, {useEffect, useState} from "react";
import{
    Text,
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
} from "react-native";


export default function Promo(){
const [isLoading,setLoading]= useState(true);
const [data,setData]= useState([]);
const getGojekPromo = async ()=> {
    try{
        const response = await fetch(
            "https://2be3-116-206-36-54.ap.ngrok.io/api/penggunas"

        );
        const json = await response.json();
        console.log(json.data.data)
        setData(json.data.data);
    }catch (error){
        console.error(error);
    }finally{
        setLoading(false);
    }
};
useEffect(() => {
    getGojekPromo();
},[])

const CardPromo = (props)=>{
    return(
        <View >
      
      <View style={{backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 20,
    marginRight:10,
    marginLeft:10,}}>
        <View style={{ flexDirection: 'column' }}>
        <Text style={{marginTop: 15, 
    fontSize:15, 
    fontWeight:'bold',paddingLeft:20}}><Text>Nama:</Text>{props.name}
</Text>
          <View>
            <Text style={{marginTop: 15, 
    fontSize:15,paddingLeft:20, marginBottom:15,
    fontWeight:'bold'}}><Text>Email:</Text>{props.email}
</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
if(isLoading){
    <ActivityIndicator/>;
}else{
    return(
        <View style={Styles.main}>
        <View style={{ flexDirection: 'row',width:'100%'}}>
        <Image style={{ height: 79,width:148,marginLeft:-20}} source={require('../assets/logo.png')} />
        <Image style={{ height: 50,width:50,marginTop:10,marginLeft:150}} source={require('../assets/Account.png')} />
      </View>
      <Text style={{fontWeight:'bold',fontSize:30,textAlign:'center',marginTop:10}}>Daftar Akun Pengguna</Text>
            {
                data.map((val)=>{
                    return(
                        <CardPromo
        name={val.name} 
        email={val.email}
        />
                    )
                })
            }
            
        </View>
    );
}}

const Styles = StyleSheet.create({
    main:{
        justifyContent : "center",
        padding:16,
    },
});