import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import TodoAppContent from "../components/TodoAppContent";

const TodoAppScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return (
      <View style={{ flex: 1}}>
        <TodoAppContent />
      </View>
    );
  };

  export default TodoAppScreen;