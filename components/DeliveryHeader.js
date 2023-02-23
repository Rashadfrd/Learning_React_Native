import React from 'react'
import { StyleSheet, View, Image, Text, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const DeliveryHeader = () => {
    return (
    <>
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <Image 
        style={styles.image}
        source={{uri:'https://www.knowband.com/image/cache/data/OpenCart%20Delivery%20Boy/OpenCart%20Delivery%20Boy%20App-740x740.jpg'}} 
        />
        <View style={styles.headerDesc}>
            <Text style={{color:'#696969'}}>Kopernik, galaksinin en sıcak pizzası!</Text>
            <Text style={{fontSize:22,fontWeight:'bold'}}>Deliver Now!</Text>
        </View>
        </View>
        <Ionicons name="ios-person-outline" size={40} color="#497174" />
      </View>
      <View style={styles.inputAndAdjustment}>
        <View style={styles.input}>
            <Ionicons name="search-outline" size={24} color="black" />
            <TextInput style={styles.inputItem} keyboardType='default' placeholder='Search'/>
        </View>
        <Ionicons name="ios-settings-outline" size={35} color="#497174" />
      </View>
    </>
    )
  }

  const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    image:{
        width:60,
        height:60
    },
    headerDesc:{
        marginLeft:10,
        justifyContent:'center'
    },
    inputAndAdjustment:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        paddingLeft:3,
        alignItems:'center',
        width:'100%'
    },
    input:{
        backgroundColor:'#D6E4E5',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        width:'88%',
        borderRadius:5
    },
    inputItem:{
      paddingLeft:10,
        width:'100%'
    }
  })
export default DeliveryHeader
