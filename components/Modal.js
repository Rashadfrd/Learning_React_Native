import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Modal = ({modalSet,onSubmit}) => {
    const [todo,setTodo] = useState('')
  return (
    <View style={[styles.container, styles.active]}>
      <Text style={{color:'#fff',marginBottom:10}}>Add your todo</Text>
      <TextInput onChangeText={text=>setTodo(text)} value={todo} style={styles.input} placeholder='Here' placeholderTextColor="#ccc"/>
      <View style={styles.btns}>
        <Button title='Cancel' color='#F55050' onPress={()=>{modalSet(false)}} />
         <Button title="Submit" color='#1C82AD' onPress={()=>{modalSet(false); onSubmit(todo); setTodo('')}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        zIndex:5,
        backgroundColor:'rgba(0, 0, 0, 0.80);',
        position:'absolute',
        top:0,
        left:0,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderWidth:1,
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


export default Modal
