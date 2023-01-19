import React, {useEffect, useState} from "react";
import{
    Text,
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
} from "react-native";


export default function Lab(){
const [isLoading,setLoading]= useState(true);
const [data,setData]= useState([]);
const getLab = async ()=> {
    try{
        const response = await fetch(
            "https://2be3-116-206-36-54.ap.ngrok.io/api/posts"

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
    getLab();
},[])

const CardLab = (props)=>{
    return(
        <View >
      
      <View style={{backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 20,
    marginRight:10,
    marginLeft:10,}}>
        <View style={{ flexDirection: 'row' }}>
        <Image style={{height: 106,
    width:106,
    borderRadius: 20,
    margin:15, 
    marginRight:15}} source={{
        uri: 
        "https://2be3-116-206-36-54.ap.ngrok.io/storage/posts/"+props.gambar,
        width:"100%",
        height : "100%",
    }}
 />
          <View>
            <Text style={{marginTop: 15, 
    fontSize:15, 
    fontWeight:'bold'}}>{props.judul}
</Text>
            <Text style={{paddingTop: 4, 
    fontSize:13,
    color:'#ABABAB'}}>{props.caption}
</Text>
            <Text style={{paddingTop: 4, 
    fontSize:12,
    marginTop:45,
    marginBottom: 15, 
    marginRight:15,
    marginLeft:100,
    color:'#ABABAB',
    fontWeight:'bold'}}>Lihat Ruangan</Text>
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
        <View style={{ flexDirection: 'row',width:'100%', marginTop:40}}>
        <Image style={{ height: 79,width:148,marginLeft:-20}} source={require('../assets/logo.png')} />
        <Image style={{ height: 50,width:50,marginTop:10,marginLeft:150}} source={require('../assets/Account.png')} />
      </View>
      <Text style={{fontWeight:'bold',fontSize:30,textAlign:'center',marginTop:10}}>JENIS LABORATORIUM</Text>
            {
                data.map((val)=>{
                    return(
                        <CardLab
        gambar={val.image}
        caption={val.content}
        judul={val.title}
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