import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import TodoAppScreen from './screens/TodoAppScreen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title:'Most useless app in the world'
          }} 
        />
        <Stack.Screen 
          name="TodoApp" 
          component={TodoAppScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;