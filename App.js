import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartCarousel from './src/pages/StartCarousel/StartCarousel.js';
import OlaDev from './src/pages/OlaDev/OlaDev.js'
import RepoWebView from './src/pages/RepoWebView/RepoWebView.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartCarousel" headerMode="none">
                <Stack.Screen name="StartCarousel" component={StartCarousel}/>
                <Stack.Screen name="OlaDev" component={OlaDev}/>
                <Stack.Screen name="RepoWebView" component={RepoWebView}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}