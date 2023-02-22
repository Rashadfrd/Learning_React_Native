import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TodoAppModal = ({showModal,modalSet,onSubmit}) => {
    const [todo,setTodo] = useState('')
    const [error, setError] = useState(false)
  return (
    <Modal animationType='slide' visible={showModal}>
    <View style={[styles.container, styles.active]}>
    <MaterialCommunityIcons name="book-edit-outline" size={124} color="#fff" />
      <Text style={{color:'#fff',marginBottom:10}}>Add your todo</Text>
      {
        error && <Text style={{color:'red',marginBottom:10}}>You must enter something!</Text>
      }
      <TextInput onChangeText={text=>{setTodo(text);setError(false)}} value={todo} style={styles.input} placeholder='Here' placeholderTextColor="#ccc"/>
      <View style={styles.btns}>
        <Button title='Cancel' color='#F55050' onPress={()=>{modalSet(false);setError(false)}} />
         <Button title="Submit"
          color='#1C82AD'
          onPress={()=>{
            if(todo.trim().length > 0){
              setError(false)
              modalSet(false); 
              onSubmit(todo); 
              setTodo('');

            }
            else{
              setError(true)
            }
          }} />
      </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.8);',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        backgroundColor:'#1F8A70',
        borderRadius:5,
        width:200,
        height:50,
        padding:10,
        color:'#fff'
      },
      btns : {
        width:200,
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-around'
      }
})


export default TodoAppModal
