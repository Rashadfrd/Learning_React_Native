import React from 'react'
import { Text, View,StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import DeliveryHeader from '../components/DeliveryHeader'
import DeliveryCategories from '../components/DeliveryCategories'
import DeliveryProds from '../components/DeliveryProds'

const DeliveryAppScreen =  () => {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return (
        <>
            <StatusBar />
            <View style={{flex:1,padding:10}}>
                <DeliveryHeader />
                <DeliveryCategories />
                <DeliveryProds title="Offers Near You!" desc="Support your local restaurants!" />
                <DeliveryProds title="Featured" desc="Paid placements from our partners" />
            </View>
        </>
    )
}

export default DeliveryAppScreen
