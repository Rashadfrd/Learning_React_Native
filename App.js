import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView,FlatList } from 'react-native';
import Modal from './components/Modal';

export default function App() {
  const [modal,setModal] = useState(false)
  const [arr, setArr] = useState([]);

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
            <Text style={styles.listItem}>{itemData.item.name}</Text>
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
    width:'97%',
    padding:10,
    backgroundColor: 'rgba(89, 138, 138, 1)',
    color: '#fff',
    borderRadius:5,
    margin:5
    }
});
