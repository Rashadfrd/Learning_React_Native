import { View, ImageBackground,StyleSheet, TouchableOpacity, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const image = {uri: 'https://i.pinimg.com/originals/fe/e5/ea/fee5eab30a698c169dc4fd5752359c2c.jpg'};

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return (
      <View style={{ flex: 1}}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <TouchableOpacity onPress={() => navigation.navigate('TodoApp')}>
            <View style={styles.button}>
                <Text style={{color:'#fff'}}>Todo App</Text>
            </View>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center"
      },
      button: {
        backgroundColor: 'transparent',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#fff',
        alignItems:"center",
        width:300,
        padding:10,
        margin:5
      }
  })

  export default HomeScreen;