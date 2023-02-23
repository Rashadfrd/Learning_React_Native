import React from 'react'
import { View, StyleSheet, ScrollView,Image, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const  DeliveryProds = (props) => {
    return (
        <View style={{marginTop:10}}>
            <View style={{width:'100%'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}> {props.title}</Text>
                    <AntDesign name="arrowright" size={24} color="#497174" />
                </View>
                <Text style={{color:'#696969',paddingLeft:5,fontSize:13}}>{props.desc}</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.prods}>
                <View style={styles.prodItem}>
                    <Image
                    style={styles.image}
                    source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/06/is_sushi_healthy_1296x728_header-1024x575.jpg?w=1155&h=1528'}} />
                    <View style={{padding:10,paddingBottom:15}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Narmalni Sushi</Text>
                        <View style={{flexDirection:'row'}}> 
                        <Text style={{color:'#696969'}}>Nearby</Text>
                        <MaterialIcons name="place" size={20} color="#696969" />
                        <Text style={{color:'#696969'}}>Afrika</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.prodItem}>
                    <Image
                    style={styles.image}
                    source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/06/is_sushi_healthy_1296x728_header-1024x575.jpg?w=1155&h=1528'}} />
                    <View style={{padding:10,paddingBottom:15}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Narmalni Sushi</Text>
                        <View style={{flexDirection:'row'}}> 
                        <Text style={{color:'#696969'}}>Nearby</Text>
                        <MaterialIcons name="place" size={20} color="#696969" />
                        <Text style={{color:'#696969'}}>Afrika</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
  }

const styles = StyleSheet.create({
    prods:{
        marginTop:10
    },
    image:{
        width:230,
        height:130,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    prodItem:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:8,
        margin:5
    }
})

export default DeliveryProds
