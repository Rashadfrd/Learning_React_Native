import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Todo App"
        onPress={() => navigation.navigate('TodoApp')}
      />
      </View>
    );
  };

  export default HomeScreen;