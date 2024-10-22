import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen'; 
import HomeScreen from './screens/HomeScreen'; 
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import FarmerDashboard from './screens/FarmerDashboard';
import StudentDashboard from './screens/StudentDashboard';
import WeatherForecasts from './screens/WeatherForecasts';
import MarketPrices from './screens/MarketPrices';
import FarmingTips from './screens/FarmingTips';
import News from './screens/News';
import StudyGuide from './screens/StudyGuide';
import StudyTechniques from './screens/StudyTechniques';
import Tutorials from './screens/Tutorials';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> {/* Using 'Home' for user-friendly navigation */}
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="WeatherForecasts" component={WeatherForecasts} />
        <Stack.Screen name="MarketPrices" component={MarketPrices} />
        <Stack.Screen name="FarmingTips" component={FarmingTips} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="StudyGuide" component={StudyGuide} />
        <Stack.Screen name="StudyTechniques" component={StudyTechniques} />
        <Stack.Screen name="Tutorials" component={Tutorials} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
