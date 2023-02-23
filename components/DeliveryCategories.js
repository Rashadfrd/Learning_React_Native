import React from 'react'
import { ScrollView,StyleSheet,Image,View,Text } from 'react-native'

const DeliveryCategories = () => {
    return (
        <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.categories}>
        <View style={styles.categoryItem}>
            <Image 
            style={styles.image}
            source={{uri:'https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png'}}
            />
            <Text style={styles.text}>Offers</Text>
        </View>
        <View style={styles.categoryItem}>
            <Image 
            style={styles.image}
            source={{uri:'https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png'}}
            />
            <Text style={styles.text}>Offers</Text>
        </View>
        <View style={styles.categoryItem}>
            <Image 
            style={styles.image}
            source={{uri:'https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png'}}
            />
            <Text style={styles.text}>Offers</Text>
        </View>
        <View style={styles.categoryItem}>
            <Image 
            style={styles.image}
            source={{uri:'https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png'}}
            />
            <Text style={styles.text}>Offers</Text>
        </View>
        <View style={styles.categoryItem}>
            <Image 
            style={styles.image}
            source={{uri:'https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png'}}
            />
            <Text style={styles.text}>Offers</Text>
        </View>
        </ScrollView>
      </View>
    )
  }

const styles =StyleSheet.create({
    categories:{
        marginTop:15,
        flexDirection:'row',
    },
    categoryItem:{
        margin:6,
        position:'relative',
    },
    image:{
        width:75,
        height:75,
    },
    text:{
        position:'absolute',
        bottom:0,
        left:3,
        color:'white',
    }
})

export default DeliveryCategories
