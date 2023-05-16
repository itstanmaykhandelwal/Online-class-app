import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home'
import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Course from './src/screen/Course';
import UserData from './src/screen/UserData';


const App = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Course" component={Course} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="UserData" component={UserData} />
            </Stack.Navigator> 
        </NavigationContainer>
    )
}

export default App