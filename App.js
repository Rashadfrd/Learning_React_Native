import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
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
    {
      modal ? <Modal  modalSet={setModal} onSubmit = {todoAppend} /> : null
    }
    <View style={styles.container}>
      <Button title='Todo Add' onPress={()=>{setModal(true)}} />

      <View style={styles.list}>
      {arr.map((item)=>{
        return (
          <Text style={styles.listItem} key={item.id}>{item.name}</Text>
          )
        })}
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  generalContainer:{
    flex:1,
    backgroundColor:'lime',
    position:'relative'
  },
  container: {
    paddingTop:70,
    flex: 1,
    backgroundColor: '#154c79',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  list:{
    alignItems:'flex-start',
    width:250,
    paddingTop:30,
  },
  listItem:{
    width:'100%',
    padding:10,
    backgroundColor: 'rgba(89, 138, 138, 1)',
    color: '#fff',
    borderRadius:5,
    margin:5
    }
});
