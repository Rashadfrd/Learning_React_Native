import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView,FlatList, Pressable } from 'react-native';
import Modal from './components/Modal';
import { Octicons } from '@expo/vector-icons';

export default function App() {
  const [modal,setModal] = useState(false)
  const [arr, setArr] = useState([]);

  const deleteHandler = (id)=>{setArr((prevState)=>{return prevState.filter(x=>x.id !== id)})}

  const todoAppend = (item)=>{
    setArr((prevState)=>{
      return [...prevState, {id:Math.random().toString(),name:item}]
    })
  }
  return (
    <View style={styles.generalContainer}>
    <Modal showModal={modal}  modalSet={setModal} onSubmit = {todoAppend} />
    <View style={styles.container}>
      <Button title='Todo Add' onPress={()=>{setModal(true)}} />

      <View style={styles.list}>
        <FlatList alwaysBounceVertical={true} 
        data={arr}
        renderItem={(itemData)=>{
          return(
            <View style={styles.listItemWrapper}>
              <Text style={styles.listItem}>{itemData.item.name} </Text>
                <Octicons name="trash" onPress={()=>{deleteHandler(itemData.item.id)}} size={23} color="#fff" />
            </View>
          )
        }}
        keyExtractor={(item)=>{
          return item.id
        }}
        />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  generalContainer:{
    flex:1,
    backgroundColor:'lime'
  },
  container: {
    paddingTop:70,
    paddingBottom:70,
    flex: 1,
    backgroundColor: '#154c79',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  list:{
    width:250,
    paddingTop:30,
    paddingBottom:70
  },
  listItem:{
    flexDirection:'column',
    fontSize:20,
    color: '#fff',
    },
    listItemWrapper:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor: 'rgba(89, 138, 138, 1)',
      borderRadius:5,
      margin:5,
      padding:10,
    }
});
